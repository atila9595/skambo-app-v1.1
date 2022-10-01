const db = require('./db')


const Produto = db.sequelize.define('produto', {
    nome: {
        type: db.Sequelize.STRING
    },
    descricao: {
        type: db.Sequelize.TEXT
    },
    categoria: {
        type: db.Sequelize.STRING
    },
    imagem: {
        type: db.Sequelize.TEXT
    }
})

//Produto.sync({ force: true })

module.exports = Produto