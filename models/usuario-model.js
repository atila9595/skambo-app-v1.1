const db = require('./db')


const Usuaro = db.sequelize.define('usuario', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    },
    admin: {
        type: db.Sequelize.INTEGER
    },
    imguser: {
        type: db.Sequelize.TEXT
    }

})

//Usuaro.sync({ force: true })

module.exports = Usuaro