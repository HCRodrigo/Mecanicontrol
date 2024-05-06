const express = require("express")
const router = express.Router
const routes = new router()
const mecanico = require("./app/controllers/mecanicoController")
const cliente = require("./app/controllers/clienteController")

routes.get("/mecanicos", mecanico.index)
routes.post("/mecanicos", mecanico.create)

routes.get("/clientes", cliente.index)
routes.post("/clientes", cliente.create)

module.exports = routes