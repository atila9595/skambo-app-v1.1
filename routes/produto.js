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
    var erros = []

    var nomeproduto = req.body.nomeproduto
    var comentario = req.body.comentario
    var categoriaprod = req.body.categoria
    var imgprod = req.body.nomediv

    if (!nomeproduto || typeof nomeproduto == undefined || nomeproduto == null) {
        erros.push({ texto: 'Nome inválido' })
    }
    if (nomeproduto.length < 2) {
        erros.push({ texto: 'Nome do produto muito pequenos' })
    }
    if (!comentario || typeof comentario == undefined || comentario == null) {
        erros.push({ texto: 'Descrição inválido' })
    }
    if (!categoriaprod || typeof categoriaprod == undefined || categoriaprod == null) {
        erros.push({ texto: 'Categoria inválido' })
    }
    if (!imgprod || typeof imgprod == undefined || imgprod == null) {
        erros.push({ texto: 'Imagem inválido' })
    }
    if (erros.length > 0) {
        res.render('produto/add-produt', { erros: erros })
    } else {
        Produto.create({
            nome: nomeproduto,
            descricao: comentario,
            categoria: categoriaprod,
            imagem: imgprod
        }).then(() => {
            res.render('produto/list-produt')
        }).catch((erro) => {
            res.send('erro: ' + erro)
        })

    }



    //console.log(produ.nome + ' ' + produ.comentario + ' ' + produ.categoria + ' ' + produ.imagem)
    //+ ' ' + produ.nomediv
})

produto_rotas.get('/:id', (req, res) => {
    var id = req.params.id
    Produto.findByPk(id).then((produc) => {
        res.status(200).json(produc)
    }).catch((erro) => {
        res.send('erro: ' + erro)
    })

    //console.log(produ.nome + ' ' + produ.comentario + ' ' + produ.categoria + ' ' + produ.imagem)
    //+ ' ' + produ.nomediv
})

module.exports = produto_rotas