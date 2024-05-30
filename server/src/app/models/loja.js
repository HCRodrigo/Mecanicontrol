const mysql = require("mysql2")
const dbConfig = require("../config")

class Mecanico{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTudo(){
        return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM loja"
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,retorno])
                }
            })
        })
    }   

    Inserir(nome, email, senha, endereco, contato){
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO loja (nome, email, senha, endereco, contato) 
            VALUE ('${nome}','${email}','${senha}','${endereco}','${contato}')`
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,'Loja Inserido'])
                }
            })
        })
    }

    selecionarLoja(id) {
        let sql = `SELECT * FROM loja WHERE id="${id}";`

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

    atualizar(id, nome, email, senha, endereco, contato) {
        let sql = `UPDATE loja SET nome="${nome}", email="${email}", senha="${senha}", endereco="${endereco}", contato="${contato}"  WHERE id="${id}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, "Loja Atualizado"])
            })
        })
    }

    deletar(id) {
        let sql = `DELETE FROM loja WHERE id="${id}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                } else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Loja deletado"])
                    } else {
                        resolve([404, "Loja não encontrado"])
                    }
                }

            })
        })
    }
}

module.exports = new Mecanico()