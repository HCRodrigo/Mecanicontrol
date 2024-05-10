const mysql = require("mysql2")
const dbConfig = require("../config")
const bcrypt = require("bcryptjs") 

class Mecanico{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTudo(){
        return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM mecanico"
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
            let sql = `INSERT INTO mecanico (nome, email, senha, endereco, contato) 
            VALUE ('${nome}','${email}','${senha}','${endereco}','${contato}')`
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

module.exports = new Mecanico()