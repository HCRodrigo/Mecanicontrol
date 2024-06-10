const lojas = require("../models/loja")

class MecanicoController{
    index(req,res){
        lojas.mostrarTudo().then(
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
        lojas.Inserir(nome, contato, email, bairro, numero, rua, complemento).then(
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
        let { id } = req.params

        lojas.selecionarLoja(id).then(
            resposta => {
                console.debug("Exibindo Loja")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Exibindo Loja")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        let { id } = req.params
        let {nome, contato, email, bairro, numero, rua, complemento} = req.body

        lojas.atualizar(id, nome, contato, email, bairro, numero, rua, complemento).then(
            resposta => {
                console.debug("Atualizando Loja")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Atualizando Loja")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res) {
        let { id } = req.params

        lojas.deletar(id).then(
            resposta => {
                console.debug("Deletando Loja")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Deletando Loja")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

module.exports = new MecanicoController()