const express = require("express")
const app = express()
const emojiFavicon = require('emoji-favicon');
require('dotenv').config()

app.use(emojiFavicon('sunglasses'));
app.enable("trust proxy")
app.use(express.static('public'))

require('./routes')(app)
app.listen(process.env.PORT, () => {
    console.info("Server started")
})