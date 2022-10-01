const db = require('./db')


const Produto = db.sequelize.define('produto', {
    idinteressado: {
        type: db.Sequelize.STRING
    },
    idprodutointeressado: {
        type: db.Sequelize.TEXT
    },
    iduser: {
        type: db.Sequelize.STRING
    },
    idprodutouser: {
        type: db.Sequelize.TEXT
    }
})

//Produto.sync({ force: true })

module.exports = Produto