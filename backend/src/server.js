const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://aircncuser:1234@aircnc.lrduflw.mongodb.net/Aircnc?retryWrites=true&w=majority')
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
// )

//req.query = Acessar query params (filtros)
//req.params = Acessar route params (edição, deleção)
//req.body = Acessar corpo da requisição

app.use(express.json())
app.use(routes)

app.listen(3333)