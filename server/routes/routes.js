const express = require('express')
const router = express.Router()
const authController = require('../controller/authController.js')

// all the routes to controllers that talk to the api
// you dont need to do routes that are only serving a page since its handled by react router

// auth route for sign up log in log out
// post route to auth to sign up
router.post('/signup', authController.postSignup)
// post route to auth to log in
router.post('/login', authController.postLogin)
// post route to auth to sign out
// router.post('/logout', authController.postLogout)


// formdata to submit a new form
// get route to to form controller to get all form data by a specific user
// post route to form controller to submit a new response 

module.exports = router