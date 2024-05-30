const express = require("express")
const router = express.Router
const routes = new router()
const mecanico = require("./app/controllers/mecanicoController")
const cliente = require("./app/controllers/clienteController")
const carro = require("./app/controllers/carroController")
const loja = require("./app/controllers/lojaController")
const nota = require("./app/controllers/notaController")
const agendamento = require("./app/controllers/agendamentoController")

routes.get("/mecanicos", mecanico.index)
routes.post("/logar", mecanico.logar)
routes.post("/mecanicos", mecanico.create)
routes.get("/mecanicos/:id", mecanico.get)
routes.post("/mecanicos/:id", mecanico.update)
routes.delete("/mecanicos/:id", mecanico.delete)

routes.get("/clientes", cliente.index)
routes.get("/clientes/:id", cliente.get)
routes.post("/clientes", cliente.create)
routes.put("/clientes/:id", cliente.update)
routes.delete("/clientes/:id", cliente.delete)

routes.get("/carros", carro.index)
routes.post("/carros", carro.create)
routes.get("/carros/:id", carro.get)
routes.put("/carros/:id", carro.update)
routes.delete("/carros/:id", carro.delete)

routes.get("/lojas", loja.index)
routes.post("/lojas", loja.create)
routes.get("/lojas/:id", loja.get)
routes.put("/lojas/:id", loja.update)
routes.delete("/lojas/:id", loja.delete)

routes.get("/notas", nota.index)
routes.post("/notas", nota.create)
routes.get("/notas/:id", nota.get)
routes.put("/notas/:id", nota.update)
routes.delete("/notas/:id", nota.delete)

routes.get("/agendamentos", agendamento.index)
routes.post("/agendamentos", agendamento.create)
routes.get("/agendamentos/:id", agendamento.get)
routes.put("/agendamentos/:id", agendamento.update)
routes.delete("/agendamentos/:id", agendamento.delete)

module.exports = routes