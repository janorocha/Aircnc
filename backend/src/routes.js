const express = require("express")
const Sessioncontroler = require('./controlers/SessionControler')

const routes = express.Router()

routes.post('/sessions', Sessioncontroler.store)

module.exports = routes