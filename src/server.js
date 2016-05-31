import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.listen(port, function () {
  console.log('Listening on port: ' + port)
})
