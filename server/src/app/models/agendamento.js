const mysql = require("mysql2")
const dbConfig = require("../config")

class Mecanico{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTudo(){
        return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM agendamento"
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,retorno])
                }
            })
        })
    }   

    Inserir(id_cliente, dia, hora, descricao){
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO mecanico (id_cliente, dia, hora, descricao) 
            VALUE ('${id_cliente}','${dia}','${hora}','${descricao}')`
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,'Agendamento Inserido'])
                }
            })
        })
    }

    selecionarAgendamentos(id_agendamento) {
        let sql = `SELECT * FROM agendamento WHERE id_agendamento="${id_agendamento}";`

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

    atualizar(id_agendamento, id_cliente, dia, hora, descricao) {
        let sql = `UPDATE agendamento SET id_cliente="${id_cliente}", dia="${dia}", hora="${hora}", descricao="${descricao}"  WHERE id_agendamento="${id_agendamento}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, "Agendamento Atualizado"])
            })
        })
    }

    deletar(id_agendamento) {
        let sql = `DELETE FROM agendamento WHERE id_agendamento="${id_agendamento}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                } else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Agendamento deletado"])
                    } else {
                        resolve([404, "Agendamento não encontrado"])
                    }
                }

            })
        })
    }
}

module.exports = new Mecanico()