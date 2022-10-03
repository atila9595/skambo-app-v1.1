const db = require('./db')


const Interesse = db.sequelize.define('interesse', {
    idinteressado: {
        type: db.Sequelize.INTEGER
    },
    idprodutointeressado: {
        type: db.Sequelize.INTEGER
    },
    iduser: {
        type: db.Sequelize.INTEGER
    },
    idprodutouser: {
        type: db.Sequelize.INTEGER
    }
})

//Interesse.sync({ force: true })


module.exports = Interesse