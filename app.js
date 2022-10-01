//carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const user = require('./routes/user')
const home = require('./routes/home')
const prod = require('./routes/produto')
const inte = require('./routes/interesse')
const path = require('path')
    //const mongoose = require('mongoose')




app.use(cors())
    // Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'));

//mongoose
// em breve

//public
app.use(express.static(path.join(__dirname, 'public')))

//Rotas
app.use('/user', user)
app.use('/home', home)
app.use('/prod', prod)
app.use('/inte', inte)
    //Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log('Servidor rodando! ')
})