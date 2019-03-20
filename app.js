const express = require("express")
const path = require("path")
const app = express()
const port = 8080
const router = express.Router();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
