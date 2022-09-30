const express = require('express')
const home_rotas = express.Router()

home_rotas.get('/', (req, res) => {
    res.render('home/index')
})

home_rotas.get('/add-user', (req, res) => {
    res.render('home/add_usuario')
})

module.exports = home_rotas