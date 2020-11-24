const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/sanity', function(req, res){
    const OK = 'OK'
    res.send(OK)
})

const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})