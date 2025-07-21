const mysql = require("mysql2");

//Função para Estabelece Conexão com o Banco de Dados
const conexao = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "200450",
    database: "express",
    port: 3306,

});

// Função de Validações de Acesso ao Banco de Dados
conexao.connect((erro) =>{

    if(erro){
        console.log("Falha ao conectar ao banco de dados" + erro);
    }
    console.log("Conexão estabelecida com Sucesso ao Banco de Dados " + conexao.user)

});

// Exportando a Função Conexão
module.exports = conexao;