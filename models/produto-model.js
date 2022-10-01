const { Association } = require('sequelize');
const db = require('./db')
const Usuario = require('./usuario-model')

const Produto = db.sequelize.define('produto', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    categoria: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    imagem: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    ativo: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    usuario_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,

    }
})

Usuario.Association = (Produto) => {
    Usuario.hasMany(Produto)
}

//Produto.sync({ force: true })

module.exports = Produto