const agendamentos = require("../models/agendamento")

class MecanicoController{
    index(req,res){
        agendamentos.mostrarTudo().then(
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
        let {id_cliente, dia, hora, descricao} = req.body
        agendamentos.Inserir(id_cliente, dia, hora, descricao).then(
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
        let { id_agendamento } = req.params

        agendamentos.selecionarAgendamentos(id_agendamento).then(
            resposta => {
                console.debug("Exibindo Agendamento")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Exibindo Agendamento")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        let { id_agendamento } = req.params
        let { id_cliente, dia, hora, descricao } = req.body

        agendamentos.atualizar(id_agendamento, id_cliente, dia, hora, descricao).then(
            resposta => {
                console.debug("Atualizando Agendamento")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Atualizando Agendamento")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res) {
        let { id_agendamento } = req.params

        agendamentos.deletar(id_agendamento).then(
            resposta => {
                console.debug("Deletando Agendamento")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Deletando Agendamento")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

module.exports = new MecanicoController()