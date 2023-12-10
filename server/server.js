const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/database')
const app = express()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

import Routes from './routes/routes.js'

//access .env file in config folder
require('dotenv').config({ path: "./config/.env" })

// Body parsing
app.use(cors())
app.use(express.json())


app.use(passport.initialize())
app.use(passport.session())

app.use('/', Routes)

connectDB().then(() => {
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Listening for requests on port ${process.env.PORT}`)
    })
})  