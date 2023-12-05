const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/database')
const app = express()

//access .env file in config folder
require('dotenv').config({ path: "./config/.env" })

// Body parsing
app.use(cors())
app.use(express.json())

connectDB().then(() => {
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Listening for requests on port ${process.env.PORT}`)
    })
})