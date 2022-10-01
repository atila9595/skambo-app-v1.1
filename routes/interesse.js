const { json } = require('body-parser')
const express = require('express')
const send = require('send')
const interesse_rotas = express.Router()
const Produto = require('../models/produto-model')
    /*
    interesse_rotas.get('/:id', async(req, res) => {
        var id = req.params.id
        Produto.then(() => {
            res.render('home/interessa', { img: produc[1].imagem })
        }).catch((erro) => {
            res.send('erro: ' + erro)
        })

    })
    */
interesse_rotas.get('/:id', async(req, res) => {
    var id = req.params.id
    Produto.findByPk(id).then((produc) => {
        res.render('home/interesse', { nome: produc.nome, img: produc.imagem, desc: produc.descricao })
    }).catch((erro) => {
        res.send('erro: ' + erro)
    })

})



module.exports = interesse_rotas