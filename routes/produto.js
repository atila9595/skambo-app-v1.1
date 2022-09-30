const { json } = require('body-parser')
const express = require('express')
const produto_rotas = express.Router()
const Produto = require('../models/produto-model')

produto_rotas.get('/', async(req, res) => {
    await Produto.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((produc) => {

        res.render('produto/list-produt', { img: produc[1].imagem })
    })

})
produto_rotas.get('/list', async(req, res) => {
    await Produto.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((produc) => {

        res.status(200).json(produc)
    })


})

produto_rotas.get('/add-prod', (req, res) => {
    res.render('produto/add-produt')
})

produto_rotas.post('/new-prod', (req, res) => {
    Produto.create({
        nome: req.body.nomeproduto,
        descricao: req.body.comentario,
        categoria: req.body.categoria,
        imagem: req.body.nomediv
    }).then(() => {
        res.render('produto/list-produt')
    }).catch((erro) => {
        res.send('erro: ' + erro)
    })

    //console.log(produ.nome + ' ' + produ.comentario + ' ' + produ.categoria + ' ' + produ.imagem)
    //+ ' ' + produ.nomediv
})

produto_rotas.get('/:id', (req, res) => {
    var id = req.params.id
    Produto.findByPk(id).then((id) => {
        res.render('produto/edit-produt', id)
    }).catch((erro) => {
        res.send('erro: ' + erro)
    })

    //console.log(produ.nome + ' ' + produ.comentario + ' ' + produ.categoria + ' ' + produ.imagem)
    //+ ' ' + produ.nomediv
})

module.exports = produto_rotas