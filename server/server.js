const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require("connect-mongo")
const connectDB = require('./config/database')
const cors = require('cors')

const Routes = require('./routes/routes.js')

//access .env file in config folder
require('dotenv').config({ path: "./config/.env" })

//passport config
require('./config/passport.js')(passport)

const corsOptions = {
    origin: process.env.ORIGIN,
    credentials: true,
}

app.use(cors(corsOptions))

// Body parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Setup sessions stored in mongodb
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false, 
        store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    })
)

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use('/', Routes)

connectDB().then(() => {
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Listening for requests on port ${process.env.PORT}`)
    })
})  