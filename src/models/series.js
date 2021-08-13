const mongoose = require('mongoose')

const CommantSchema = mongoose.Schema({
    comment: String
})

const SerieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enumValues: ['to-watch', 'watching', 'watched']
    },
    comments: [CommantSchema]
})

module.exports = mongoose.model('Serie', SerieSchema)