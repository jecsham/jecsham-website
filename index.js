const express = require("express")
const favicon = require('serve-favicon')
const path = require('path')
const app = express()
require('dotenv').config()

app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')))
app.enable("trust proxy")
app.use(express.static('public'))

require('./routes')(app)
app.listen(process.env.PORT, () => {
    console.info("Server started")
})