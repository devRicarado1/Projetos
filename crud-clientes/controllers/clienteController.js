const Cliente = require("../models/clienteModel");

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

// Lista Cliente pelo ID
exports.listarClientesId = (req, res) => {

    const id = req.params.id;

    Cliente.listarClientesId(id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ mensagem: "Falha ao buscar cliente " });
        }
        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Cliente não encontado " });
        }

        res.json(resultado[0]);
    });
};

// Adicona Cliente
exports.adicionarCliente = (req, res) => {

    const { nomeCliente, cpfCliente, telefoneCliente } = req.body;

    if (!nomeCliente || !cpfCliente || !telefoneCliente) {
        return res.status(400).json({ mensagem: "Todos os Campos são obrigatorios" });
    }

    const novoCliente = { nomeCliente, cpfCliente, telefoneCliente };

    Cliente.adicionarCliente(novoCliente, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({ mensagem: "Falha ao cadastar cliente" });
        }

        const clienteCriado = {
            idCliente: resultado.insertId,
            ...novoCliente
        };

        res.status(201).json(clienteCriado);
    });
};

// Atualizar Clientes
exports.atualizarCadastro = (req, res) =>{

    const id =req.params.id;
    const { nomeCliente, cpfCliente, telefoneCliente } = req.body;

    if(!nomeCliente || !cpfCliente || !telefoneCliente ) {
        return res.status(400).json({mensagem: "Todos os campos são obrigatorios" });
    }

    const clienteAtualizado = { nomeCliente, cpfCliente, telefoneCliente };

    Cliente.atualizarCadastro(id, clienteAtualizado, (erro, resultado) => {
        if(erro) {
            return res.status(500).json({mensagem: "Falha ao atualizar cliente" });
        }

        if(resultado.affectedRows === 0){
            return res.status(404).json({mensagem: "Cliente não encontado" });
        }

        res.json({mensagem: "Cliente atualizado com sucesso", id, ...clienteAtualizado});

    });
};

// Deleta Clientes
exports.deleteCliente = (req, res) => {

    const id = req.params.id;

    Cliente.deleteCliente(id, (erro, resultado) => {

        if(erro){
            return res.status(500).json({mensagem: "Falha ao deletar Cliente"});
        }

        if(resultado.affectedRows === 0){
            return res.status(404).json({mensagem: "Cliente não encontrado"});
        }

        res.json({mensagem: "Cliente deletado com Sucesso!" });
    });
};