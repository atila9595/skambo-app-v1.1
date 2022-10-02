const express = require('express')
const home_rotas = express.Router()
const Produto = require('../models/produto-model')

home_rotas.get('/', async(req, res) => {
    await Produto.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(() => {

        res.render('home/index')
    })

})

home_rotas.get('/login', async(req, res) => {

    res.render('home/loginPage')


})

home_rotas.get('/addusuario', async(req, res) => {

    res.render('home/add_usuario')


})

home_rotas.get('/list', async(req, res) => {
    await Produto.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((produc) => {

        res.status(200).json(produc)
    })


})

home_rotas.get('/:id', (req, res) => {
    var id = req.params.id
    Produto.findByPk(id).then((produc) => {
        res.render('home/interesse', { nome: produc.nome, img: produc.imagem, desc: produc.descricao })
    }).catch((erro) => {
        res.send('erro: ' + erro)
    })

    //console.log(produ.nome + ' ' + produ.comentario + ' ' + produ.categoria + ' ' + produ.imagem)
    //+ ' ' + produ.nomediv
})



module.exports = home_rotas