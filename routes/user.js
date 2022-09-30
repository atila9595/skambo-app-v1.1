const express = require('express')
const user_rotas = express.Router()

user_rotas.get('/', (req, res) => {
    res.send("Pagina de usuario")
})

user_rotas.get('/test', (req, res) => {
    res.render('user/index')
})




module.exports = user_rotas