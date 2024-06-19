const notas = require("../models/nota")

class MecanicoController{
    index(req,res){
        notas.mostrarTudo().then(
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
        let {id_mecanico, id_loja, codigo, n_fabricacao, descricao, qtd, unidade, valor, valor_unidade, local_peca} = req.body
        notas.Inserir(id_mecanico, id_loja, codigo, n_fabricacao, descricao, qtd, unidade, valor, valor_unidade, local_peca).then(
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
        let { id_nota } = req.params

        notas.selecionarNota(id_nota).then(
            resposta => {
                console.debug("Exibindo Nota")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Exibindo Nota")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        let { id_nota } = req.params
        let {id_mecanico, id_loja, codigo, n_fabricacao, descricao, qtd, unidade, valor, valor_unidade, local_peca} = req.body

        notas.atualizar(id_nota, id_mecanico, id_loja, codigo, n_fabricacao, descricao, qtd, unidade, valor, valor_unidade, local_peca).then(
            resposta => {
                console.debug("Atualizando Nota")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Atualizando Nota")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res) {
        let { id_nota } = req.params

        notas.deletar(id_nota).then(
            resposta => {
                console.debug("Deletando Nota")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Deletando Nota")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

module.exports = new MecanicoController()