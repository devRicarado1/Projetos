// Importando a Biblioteca do express
const express = require("express");

// Importando Apenas as router da biblioteca do express
const router = express.Router();

const clienteController = require("../controllers/clienteController");

// Lista todos os Clientes
router.get("/", clienteController.listarTodosClientes);

// Lista Clientes atraves do ID
router.get("/:id", clienteController.listarClientesId);

// Adiciona Clientes
router.post("/", clienteController.adicionarCliente);

// Atualizar Cliente
router.put("/:id", clienteController.atualizarCadastro);

// Deletar cliente
router.delete("/:id", clienteController.deleteCliente);

module.exports = router;