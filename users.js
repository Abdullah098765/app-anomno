const express = require('express')
const api = express.Router()



api.get('/user', function (req, res) {

    res.send("Hi User")

})
api.get('/user2', function (req, res) {

    res.send("Hi User2")

})
api.get('/user3', function (req, res) {

    res.send("Hi User3")

})

module.exports = api