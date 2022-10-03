const { json } = require('body-parser')
const express = require('express')
const send = require('send')
const interesse_rotas = express.Router()
const Produto = require('../models/produto-model')
const Interesse = require('../models/interesse-model')

interesse_rotas.post('/:id/:user', async(req, res) => {
    var id = req.params.id
    var user = req.params.user
    var idproduto = req.body.idprod
    var idusuario = req.body.iduser
    console.log(req.body.iduser + ' ' + id)
    Interesse.create({
        idinteressado: req.user.id,
        iduser: user,
        idprodutouser: id
    }).then(() => {

        res.render('user/index', { success_msg: 'Pedido de troca enviado!' })
    }).catch((erro) => {
        console.log('erro: ' + erro)
        res.render('home/index')
    })

})

interesse_rotas.get('troca/:id', async(req, res) => {
    var id = req.params.id
    Produto.findByPk(id).then((produc) => {

    }).catch((erro) => {
        res.send('erro: ' + erro)
    })

})



module.exports = interesse_rotas