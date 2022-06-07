const express = require("express")
const Sessioncontroler = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', Sessioncontroler.store)

module.exports = routes