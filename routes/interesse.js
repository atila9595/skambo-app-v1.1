const { json } = require('body-parser')
const express = require('express')
const send = require('send')
const interesse_rotas = express.Router()
const Produto = require('../models/produto-model')
const Usuario = require('../models/usuario-model')

interesse_rotas.get('/:id', async(req, res) => {
    var id = req.params.id
    Produto.findByPk(id).then((produc) => {
        console.log(id)
        res.render('home/interesse', {
            nome: produc.nome,
            img: produc.imagem,
            desc: produc.descricao,
            idprod: id,
            iduser: user.id,
            imguser: user.imguser,
            nomeuser: user.nome
        })
    }).catch((erro) => {
        res.send('erro: ' + erro)
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