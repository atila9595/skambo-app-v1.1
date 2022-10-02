const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcryptjs")
const Usuaro = require("../models/usuario-model")

// Model de Usuário
require("../models/usuario-model")
const Usuario = Usuario.model("usuarios")

module.exports = function(passport) {

    passport.use(new localStrategy({usernameField: 'email'}, (email, senha, done) => {
        Usuario.findOne({email: 'email'}).then((usuario) => {
            if(!usuario) {
                return done(null, false, {message: 'Esta conta não existe'})
            }

            bcrypt.compare(senha, usuario.senha, (erro, batem) => {

                if(batem) {
                    return done(null, user)
                } else {
                    return done(null, false, {message: 'Senha incorreta'})
                }
            })
        })
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        Usuario.findById(id, (err, usuario) => {
            done(err, usuario)
        })
    })
}