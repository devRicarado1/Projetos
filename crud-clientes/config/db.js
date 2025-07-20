const mysql = require("mysql2");

const conexao = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "200450",
    database: "express",
    port: 3306

});

conexao.connect((erro) => {

    if(erro){
        console.error("Falha ao Conectar ao Banco de Dados " + erro);
        return;
    }
    console.log("Conexão estabelecida com o Banco de Dados com Sucesso!")

});

// Exportando a Função de conexão
module.exports = conexao;
