const Livros = require("../models/livroMolels");

exports.listarTodosLivros = (req, res) => {

    Livros.listarTodosLivros((erro, resultado) => {
        if (erro) {
            return res.status(500).json({ mensagem: "Falha ao Cdastra Livro" })
        }
        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum Livro Cadastrado" })
        }
        res.json(resultado);

    });
};

exports.listarLivrosId = (req, res) => {

    const idLivro = req.params.idLivro;

    Livros.listarLivrosId(idLivro, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({ mensagem: "Falha ao Buscar Livro" })
        }
        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Livro não encontrado" })
        }

        res.json(resultado[0]);
    });
};

exports.listarLivrosGenero = (req, res) => {

    const generoLivro = req.params.generoLivro;

    Livros.listarLivrosGenero(generoLivro, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({ mensagem: "Falha ao buscar livro" });
        }
        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum Livro Cadastrado" });
        }

        res.json(resultado);
    });
};

exports.adicionarLivros = (req, res) => {

    const { tituloLivro, autorLivro, dataPublicacaoLivro, generoLivro } = req.body;

    if (!tituloLivro || !autorLivro || !dataPublicacaoLivro || !generoLivro) {
        return res.status(400).json({ mensagem: "Falha: Preencha todos os campos" })
    }

    const novoLivro = { tituloLivro, autorLivro, dataPublicacaoLivro, generoLivro };

    Livros.adicionarLivros(novoLivro, (erro, resultado) => {
        if(erro){
            return res.status(500).json({ mensagem: "Falha ao Cadastra Livro"});
        }
        const livroCriado = {
            idLivro: resultado.insertId,
            ...novoLivro
        }

        res.status(201).json(livroCriado);
    });
};

exports.editarDadosLivro = (req, res) => {

    const idLivro = req.params.idLivro;
    const { tituloLivro, autorLivro, dataPublicacaoLivro, generoLivro } = req.body;

    if (!tituloLivro || !autorLivro || !dataPublicacaoLivro || !generoLivro) {
        return res.status(400).json({ mensagem: "Falha: Preencha todos os campos" })
    }

    const livroAtualizado = { tituloLivro, autorLivro, dataPublicacaoLivro, generoLivro };

    Livros.editarDadosLivro(idLivro, livroAtualizado, (erro, resultado) => {
        if(erro) {
            return res.status(500).json({mensagem: "Falha ao atualizar Livro" });
        }

        if(resultado.affectedRows === 0){
            return res.status(404).json({mensagem: "Livro não encontado" });
        }

        res.json({mensagem: "Livro atualizado com sucesso", idLivro, ...livroAtualizado});

    });
};

exports.deletarLivro = (req, res) => {

    const idLivro = req.params.idLivro;

    Livros.deletarLivro(idLivro, (erro, resultado) => {

        if(erro){
            return res.status(500).json({mensagem: "Falha ao Deletar Livro"});
        }

        if(resultado.affectedRows === 0){
            return res.status(404).json({mensagem: "Livro não encontrado"});
        }

        res.json({mensagem: "Livro deletado com Sucesso!" });
    });
};