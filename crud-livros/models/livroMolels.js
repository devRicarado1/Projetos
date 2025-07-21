const conexao = require("../db/db");

// Função para Lista os Livros Cadastrados no Banco de Dados
exports.listarTodosLivros = (callback) => {

    conexao.query("SELECT * FROM livros", callback);

};

// Função Para Lista Livros pelo Autor
exports.listarLivrosAutor = (autorLivro, callback) => {

    conexao.query("SELECT * FROM livros WHERE autorLivro = ?", [autorLivro], callback);

};

exports.listarLivrosId = (idLivro, callback) => {

    conexao.query("SELECT * FROM livros WHERE idLivro = ?", [idLivro], callback);

};

// Função Para Lista Livros pelo Genero
exports.listarLivrosGenero = (generoLivro, callback) => {

    conexao.query("SELECT * FROM livros WHERE generoLivro = ?", [generoLivro], callback);

};

// Função para Adiciona um novo Livro no Bando de Dados
exports.adicionarLivros = (livro, callback) => {

    const query = ("INSERT INTO livros (tituloLivro, autorLivro, dataPublicacaoLivro, generoLivro) VALUES(?, ?, ?, ?)");
    const valores = [livro.tituloLivro, livro.autorLivro, livro.dataPublicacaoLivro, livro.generoLivro];

    conexao.query(query, valores, callback);

};

// Editar dados do livro
exports.editarDadosLivro = (idLivro, livro, callback) => {

    const query = ("UPDATE livros SET tituloLivro = ?, autorLivro = ?, dataPublicacaoLivro = ?, generoLivro = ? WHERE idLivro = ?");
    const valores = [livro.tituloLivro, livro.autorLivro, livro.dataPublicacaoLivro, livro.generoLivro, idLivro];

    conexao.query(query, valores, callback);

};

// Deletar livro
exports.deletarLivro = (idLivro, callback) => {

    const query = "DELETE FROM livros WHERE idLivro = ?";
    conexao.query(query, [idLivro], callback);

};