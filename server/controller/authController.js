const passport = require('passport')
const User = require('../model/user.js')

module.exports = {
  postSignup: async (req, res, next) => {
      try {
          const { username, email, password } = req.body
          const existingUser = await User.findOne({email: email}).exec()

          if(existingUser){
              res.send('User already exists')
              return
          }
          if(!existingUser){
              const user = new User({ username, email, password })                
              await user.save()
              res.send('User created')
          }
      }catch(err){
          next(err)
      }
  },
  postLogin: async (req, res, next) => {
      try{
          passport.authenticate("local", (err, user, info) => {
              if (err) {
                return next(err);
              }
              if (!user) {
                res.send('Email does not exist')
                return next()
              }
              req.login(user, (err) => {
                if (err) {
                  return next(err);
                } 
                res.send("Success! You are logged in.");
              });
            })(req, res, next);
      }catch(err){
        console.log(err)
      }
  },
  postLogout: (req, res) => {
    // console.log(req)
    // res.send('hey back')
    console.log('inside logout')
    console.log('before logout - req.session:', req.session)
    try{
      req.logout(() => {
        console.log('User has logged out')
        console.log('after logout - req.session:', req.session)
      
        req.session.destroy((err) => {
          if(err){
            console.log('Error: Failed to destory the session during logout', err)
          }
          req.user = null

          res.status(200).send('User logged out')

        })
      })

    }catch(err){
      console.error('error during logout:', err)
      res.status(500).send('Internal Server Error')
    }
  }
}


