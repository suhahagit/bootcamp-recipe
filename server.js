const express = require('express')
const path = require('path')
const urllib = require('urllib')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/sanity', function(req, res){
    const OK = 'OK'
    res.send(OK)
})

app.get('/recipes/:ingredient', function(req, res){
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data, response) {
    if (err) {
        console.log('API request error')
        throw err; 
    }
    const recipes = JSON.parse(data).results
    //console.log(recipes)
    res.send(recipes)
})  
})

const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})