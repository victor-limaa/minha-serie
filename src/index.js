require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const series = require('./routes/series')

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

app.use(bodyParser({ extended: true }))
app.use('/series', series)

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running`)
        })
    })
    .catch(err => console.log(err))