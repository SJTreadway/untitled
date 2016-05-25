const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.listen(port, function() {
  console.log("Listening on port: " + port)
})
