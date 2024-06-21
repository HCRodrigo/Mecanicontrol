const mecanicos = require("../models/mecanico")

class MecanicoController{
    index(req,res){
        mecanicos.mostrarTudo().then(
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
        let {nome, email, senha, endereco, contato} = req.body
        mecanicos.Inserir(nome, email, senha, endereco, contato).then(
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

        mecanicos.selecionarMecanico(id).then(
            resposta => {
                console.debug("Exibindo Mecanico")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Exibindo Mecanico")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        let { id } = req.params
        let {nome, email, senha, endereco, contato} = req.body

        mecanicos.atualizar(id, nome, email, senha, endereco, contato).then(
            resposta => {
                console.debug("Atualizando Mecanico")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Atualizando Mecanico")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res) {
        let { id } = req.params

        mecanicos.deletar(id).then(
            resposta => {
                console.debug("Deletando Mecanico")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Deletando Mecanico")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    logar(req, res){
        let {nome,senha} = req.body

        console.debug("teste login")

        mecanicos.verificarLoginSenha(nome, senha).then(
            resposta=>{
                console.debug("Efetuando Login")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro: Efetuando Login")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }    
}

module.exports = new MecanicoController()