const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios').default
const path = require('path')

app.use(express.json())
app.use(cors())

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', function(req, res){
    res.sendFile(path.join(__dirname, '../client/styles.css'))
})

app.get('/js', function(req, res){
    res.sendFile(path.join(__dirname, '../index/main.js'))
})


const port = process.env.PORT || 4545

app.listen(port, console.log(`Take us to Warp ${port}!`))

