const mongoose = require('mongoose')

const FormDataSchema = new mongoose.Schema({
    rawScores:{
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
})

module.exports = mongoose.model('formData', FormDataSchema)