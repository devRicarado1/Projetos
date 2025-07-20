const conexao = require("../config/db");

exports.listarTodosClientes = (callback) => {

    conexao.query("SELECT * FROM clientes", callback);

};

// Função para Listar os clientes pelo ID
exports.listarClientesId = (id, callback) => {

    conexao.query("SELECT * FROM clientes WHERE idCliente = ?", [id], callback);

};

// Função para Adiciona Clientes
exports.adicionarCliente = (cliente, callback) => {
    
    const query = "INSERT INTO clientes (nomeCliente, cpfCliente, telefoneCliente) VALUES(?, ?, ?)";
    const valores = [cliente.nomeCliente, cliente.cpfCliente, cliente.telefoneCliente];
    
    conexao.query(query, valores, callback)

};

// Função para Atualizar Cadastro buscando pelo ID
exports.atualizarCadastro = (id, cliente, callback) => {

    const query = "UPDATE clientes SET nomeCliente = ?, cpfCliente = ?, telefoneCliente = ? Where idCliente = ?";;
    const valores = [cliente.nomeCliente, cliente.cpfCliente, cliente.telefoneCliente, id];

    conexao.query(query, valores, callback);
}

exports.deleteCliente = (id, callback) => {

    conexao.query("DELETE FROM clientes WHERE idCliente = ?", [id], callback);

};