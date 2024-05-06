const mysql = require("mysql2")
const dbConfig = require("../config")

class Loja{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarLojas(){
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

    InserirLoja(nome, email, endereco, contato){
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO loja (nome, email, endereco, contato) 
            VALUE ('${nome}','${email}','${endereco}','${contato}')`
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,'Usuário Inserido'])
                }
            })
        })
    }
}

module.exports = new Loja()