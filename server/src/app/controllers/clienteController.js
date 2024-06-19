const clientes = require("../models/cliente")

class ClienteController{
    index(req,res){
        clientes.mostrarTudo().then(
            respostas =>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch(
            respostas =>{
                res.status(respostas[0]).json("Erro:"+respostas[1])
            }
        )
    }
    
    create(req,res){
        let {nome, contato, email, bairro, numero, rua, complemento} = req.body
        clientes.Inserir(nome, contato, email, bairro, numero, rua, complemento).then(
            respostas =>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch(
            respostas =>{
                res.status(respostas[0]).json("Erro:"+respostas[1])
            }
        )
    }

    get(req, res) {
        let { id_cliente } = req.params

        clientes.selecionarCliente(id_cliente).then(
            resposta => {
                console.debug("Exibindo Cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Exibindo Cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        let { id_cliente } = req.params
        let {nome, contato, email, bairro, numero, rua, complemento} = req.body

        clientes.atualizar(id_cliente, nome, contato, email, bairro, numero, rua, complemento).then(
            resposta => {
                console.debug("Atualizando Cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Atualizando Cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res) {
        let { id_cliente } = req.params

        clientes.deletar(id_cliente).then(
            resposta => {
                console.debug("Deletando Cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Deletando Cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

module.exports = new ClienteController()