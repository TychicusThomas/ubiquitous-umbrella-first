const express = require('express')
const app = express()

// app.use(express.static('./'))

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/static', (req,res)=> {

  res.sendFile('index.html')
})

app.listen(3000)