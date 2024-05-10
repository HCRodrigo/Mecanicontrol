const lojas = require("../models/loja")

class LojaController{
    index(req,res){
        lojas.mostrarLojas().then(
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
        let {nome, email, endereco, contato} = req.body
        lojas.InserirLoja(nome, email, endereco, contato).then(
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

module.exports = new LojaController()