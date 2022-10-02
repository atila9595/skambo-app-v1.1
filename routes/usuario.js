const express = require('express')
const user_rotas = express.Router()
const Usuario = require('../models/usuario-model')

user_rotas.get('/', (req, res) => {
    res.send("Pagina de usuario")
})

user_rotas.get('/index', (req, res) => {
    res.render('user/index')
})

user_rotas.post('/add', (req, res) => {
    var nome = req.body.name
    var email = req.body.email
    var password = req.body.password
    var admin = 0
    var imguser = req.body.nomediv
        //console.log(res, nome, email, password, admin, imguser)
    saveUser(res, nome, email, password, admin, imguser)
})

function saveUser(res, nomeuse, emailuse, passworduse, adminuse, imguser) {
    var erros = []

    if (!nomeuse || typeof nomeuse == undefined || nomeuse == null) {
        erros.push({ texto: 'Nome inválido' })
    }
    if (nomeuse.length < 2) {
        erros.push({ texto: 'Nome do produto muito pequenos' })
    }
    if (!emailuse || typeof emailuse == undefined || emailuse == null) {
        erros.push({ texto: 'email inválido' })
    }
    if (!passworduse || typeof passworduse == undefined || passworduse == null) {
        erros.push({ texto: 'password inválido' })
    }
    if (passworduse.length < 2) {
        erros.push({ texto: 'password do user muito pequenos' })
    }
    if (!imguser || typeof imguser == undefined || imguser == null) {
        erros.push({ texto: 'Imagem inválido' })
    }
    if (erros.length > 0) {
        res.render('home/add_usuario', { erros: erros })
    } else {
        Usuario.create({
            nome: nomeuse,
            email: emailuse,
            password: passworduse,
            admin: adminuse,
            imguser: imguser
        }).then(() => {

            res.render('home/loginPage', { success_msg: 'Usuario adicionado com sucesso!' })
        }).catch((erro) => {
            console.log('erro: ' + erro)
            res.render('home/addusuario')
        })
    }
}





module.exports = user_rotas