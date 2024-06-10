const mysql = require("mysql2")
const dbConfig = require("../config")
const bcrypt = require("bcryptjs") 

class Cliente{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTudo(){
        return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM cliente"
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,retorno])
                }
            })
        })
    }   

    Inserir(nome, contato, email, bairro, numero, rua, complemento){
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO cliente (nome, contato, email, bairro, numero, rua, complemento) 
            VALUE ('${nome}','${contato}','${email}','${bairro}', '${numero}', '${rua}', '${complemento}')`
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,'Cliente Inserido'])
                }
            })
        })
    }

    selecionarCliente(id) {
        let sql = `SELECT * FROM cliente WHERE id="${id}";`

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

    atualizar(id, nome, contato, email, bairro, numero, rua, complemento) {
        let sql = `UPDATE cliente SET nome="${nome}", contato="${contato}", email="${email}", bairro="${bairro}", numero="${numero}", rua="${rua}", complemento="${complemento}" WHERE id="${id}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, "Cliente Atualizado"])
            })
        })
    }

    deletar(id) {
        let sql = `DELETE FROM cliente WHERE id="${id}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                } else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Cliente deletado"])
                    } else {
                        resolve([404, "Cliente não encontrado"])
                    }
                }

            })
        })
    }
}

module.exports = new Cliente()