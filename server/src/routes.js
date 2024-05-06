const express = require("express")
const router = express.Router
const routes = new router()
const mecanico = require("./app/controllers/mecanicoController")
const cliente = require("./app/controllers/clienteController")
const loja = require("./app/controllers/lojaController")

routes.get("/mecanicos", mecanico.index)
routes.post("/mecanicos", mecanico.create)

routes.get("/clientes", cliente.index)
routes.post("/clientes", cliente.create)

routes.get("/lojas", loja.index)
routes.post("/lojas", loja.create)

module.exports = routes