const mysql = require("mysql2")
const dbConfig = require("../config")

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
                    resolve([201,'Mecanico Inserido'])
                }
            })
        })
    }

    selecionarMecanico(id_mecanico) {
        let sql = `SELECT * FROM mecanico WHERE id_mecanico="${id_mecanico}";`

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

    atualizar(id_mecanico, nome, email, senha, endereco, contato) {
        let sql = `UPDATE mecanico SET nome="${nome}", email="${email}", senha="${senha}", endereco="${endereco}", contato="${contato}"  WHERE id_mecanico="${id_mecanico}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, "Mecanico Atualizado"])
            })
        })
    }

    deletar(id_mecanico) {
        let sql = `DELETE FROM mecanico WHERE id_mecanico="${id_mecanico}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                } else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Mecanico deletado"])
                    } else {
                        resolve([404, "Mecanico não encontrado"])
                    }
                }

            })
        })
    }

    verificarLoginSenha(nome,senha){
        let sql = `SELECT * FROM mecanico WHERE nome = '${nome}' AND senha = '${senha}'`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }else{
                    if(retorno.length === 0){
                        resolve([404, "Mecanico não encontrado"])
                    }else{
                        let {id} = retorno[0]
                        resolve([200, {id}])
                    }
                }                
            })
        })
    }
}

module.exports = new Mecanico()