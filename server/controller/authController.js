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
    postLogout: async (req, res) => {
        console.log(req)
        res.status(200).send('Signup Successful')
    },
}
