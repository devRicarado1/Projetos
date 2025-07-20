// Lista todos os Clientes
exports.listarTodosClientes = (req, res) => {

    Cliente.listarTodosClientes((erro, resultado) => {
        if (erro) {
            return res.status(500).json({ mensagem: "Falha ao buscar Clientes" })
        }
        if (resultado.length === 0) {
            return res.status(404).json({mensagem: "Nenhum Cliente cadastrado"});
        }
        res.json(resultado);
    })
};