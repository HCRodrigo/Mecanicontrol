const express = require("express")
const server = express()
const mysql = require("mysql2")

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dadw"
})

server.use(express.static("public"))

conexao.connect(function(error){
    if(error) throw error
        console.log("Conexão realizada com sucesso")
})

server.listen(5000)

