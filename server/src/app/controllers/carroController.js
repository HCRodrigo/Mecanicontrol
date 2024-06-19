const carros = require("../models/carro")

class MecanicoController{
    index(req,res){
        carros.mostrarTudo().then(
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
        let {id_cliente, marca, modelo, ano, historico_manutencao} = req.body
        carros.Inserir(id_cliente, marca, modelo, ano, historico_manutencao).then(
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
        let { id_carro } = req.params

        carros.selecionarCarro(id_carro).then(
            resposta => {
                console.debug("Exibindo Carro")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Exibindo Carro")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        let { id_carro } = req.params
        let { id_cliente, marca, modelo, ano, historico_manutencao } = req.body

        carros.atualizar(id_carro, id_cliente, marca, modelo, ano, historico_manutencao).then(
            resposta => {
                console.debug("Atualizando Carro")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Atualizando Carro")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res) {
        let { id_carro } = req.params

        carros.deletar(id_carro).then(
            resposta => {
                console.debug("Deletando Carro")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Deletando Carro")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

module.exports = new MecanicoController()