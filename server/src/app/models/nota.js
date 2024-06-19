const mysql = require("mysql2")
const dbConfig = require("../config")

class Mecanico{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTudo(){
        return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM nota"
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,retorno])
                }
            })
        })
    }   

    Inserir(id_mecanico, id_loja, codigo, n_fabricacao, descricao, qtd, unidade, valor, valor_unidade, local_peca){
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO nota (id_mecanico, id_loja, codigo, n_fabricacao, descricao, qtd, unidade, valor, valor_unidade, local_peca) 
            VALUE ('${id_mecanico}','${id_loja}','${codigo}','${n_fabricacao}','${descricao}','${qtd}','${unidade}','${valor}','${valor_unidade}','${local_peca}')`
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,'Nota Inserido'])
                }
            })
        })
    }

    selecionarNota(id_nota) {
        let sql = `SELECT * FROM nota WHERE id_nota="${id_nota}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }else{
                    resolve([200, retorno[0]])
                }    
            })
        })
    }

    atualizar(id_nota, id_mecanico, id_loja, codigo, n_fabricacao, descricao, qtd, unidade, valor, valor_unidade, local_peca) {
        let sql = `UPDATE nota SET id_mecanico="${id_mecanico}", id_loja="${id_loja}", codigo="${codigo}", n_fabricacao="${n_fabricacao}", 
        descricao="${descricao}", qtd="${qtd}", unidade="${unidade}", valor="${valor}", valor_unidade="${valor_unidade}", 
        local_peca="${local_peca}",  WHERE id_nota="${id_nota}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, "Nota Atualizado"])
            })
        })
    }

    deletar(id_nota) {
        let sql = `DELETE FROM nota WHERE id_nota="${id_nota}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                } else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Nota deletado"])
                    } else {
                        resolve([404, "Nota não encontrado"])
                    }
                }

            })
        })
    }
}

module.exports = new Mecanico()