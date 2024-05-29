const mysql = require("mysql2")
const dbConfig = require("../config")

class Mecanico{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTudo(){
        return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM carro"
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,retorno])
                }
            })
        })
    }   

    Inserir(id_cliente, marca, modelo, ano, historico_manutencao){
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO carro (id_cliente, marca, modelo, ano, historico_manutencao) 
            VALUE ('${id_cliente}','${marca}','${modelo}','${ano}','${historico_manutencao}')`
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,'Usuário Inserido'])
                }
            })
        })
    }

    selecionarCarro(id) {
        let sql = `SELECT * FROM carro WHERE id="${id}";`

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

    atualizar(id, id_cliente, marca, modelo, ano, historico_manutencao) {
        let sql = `UPDATE carro SET id_cliente="${id_cliente}", marca="${marca}", modelo="${modelo}", ano="${ano}", historico_manutencao="${historico_manutencao}"  WHERE id="${id}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, "Usuário Atualizado"])
            })
        })
    }

    deletar(id) {
        let sql = `DELETE FROM carro WHERE id="${id}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                } else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Usuário deletado"])
                    } else {
                        resolve([404, "Usuário não encontrado"])
                    }
                }

            })
        })
    }
}

module.exports = new Mecanico()