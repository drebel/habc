const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../model/user.js')

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      try{
        const user = await User.findOne({email: email.toLowerCase()}).exec()
        console.log(user)

        if(!user){
          return done(null, false, { msg: `Email ${email} not found`})
        } 

        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err)
          }
          if (isMatch) {
            return done(null, user)
          }
          return done(null, false, { msg: "Invalid email or password." })
        })
      }catch{
        return done(err)
      }
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}