const express = require("express")
const app = express()
require('dotenv').config()

app.enable("trust proxy")
app.use(express.static('public'))

require('./routes')(app)
app.listen(process.env.PORT, () => {
    console.info("Server started")
})