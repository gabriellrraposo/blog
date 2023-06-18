// Carregando módulos
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bobyParser = require('body-parser')
const mongoose = require('mongoose')

// Configurações
// Body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Handlebar
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Mongoose

// Rotas

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log('Server Rodando')
})