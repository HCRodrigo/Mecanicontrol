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
}

module.exports = new MecanicoController()