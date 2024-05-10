const mysql = require("mysql2")
const dbConfig = require("../config")

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

    Inserir(id_mecanico, nome, email, endereco, contato){
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO cliente (id_mecanico, nome, email, endereco, contato) 
            VALUE ('${id_mecanico}','${nome}','${email}','${endereco}','${contato}')`
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

module.exports = new Cliente()