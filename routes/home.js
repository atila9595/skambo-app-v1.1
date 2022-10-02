const express = require('express')
const home_rotas = express.Router()
const Produto = require('../models/produto-model')
const Usuario = require('../models/usuario-model')

home_rotas.get('/', async(req, res) => {
    await Produto.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((produc) => {

        res.render('home/index', { img: produc[1].imagem })
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


home_rotas.get('/buscarProduto/:id', async(req, res) => {
    var id = req.params.id
    await Produto.findByPk(id).then((produc) => {
        nome = produc.nome
        categoria = produc.categoria
            //console.log(categoria + ' ' + nome)

        return res.status(200).json(produc)

    }).catch((erro) => {
        return 'erro: ' + erro
    })
})

home_rotas.get('/buscarUsuario/:id', async(req, res) => {
    var id = req.params.id
    await Usuario.findByPk(id).then((user) => {
        usuario = {
            id: user.id,
            nome: user.nome,
            email: user.email,
            imguser: user.imguser
        }
        return res.status(200).json(usuario)

    }).catch((erro) => {
        res.send('erro: ' + erro)
    })
})


home_rotas.get('/:id', (req, res) => {
    var id = req.params.id
    Produto.findByPk(id).then((produc) => {
        res.render('home/interesse', { nome: produc.nome, img: produc.imagem, desc: produc.descricao, iduser: produc.usuario })
    }).catch((erro) => {
        res.send('erro: ' + erro)
    })

    //console.log(produ.nome + ' ' + produ.comentario + ' ' + produ.categoria + ' ' + produ.imagem)
    //+ ' ' + produ.nomediv
})


module.exports = home_rotas