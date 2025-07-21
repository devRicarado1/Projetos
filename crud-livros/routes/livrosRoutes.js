// Importando a Biblioteca do express
const express = require("express");

// Importando Apenas as router da biblioteca do express
const router = express.Router();

const livroController = require("../controllers/livroController");

// Lista todos os Clientes
router.get("/", livroController.listarTodosLivros);

// Lista Clientes atraves do ID
router.get("/:id", livroController.listarLivrosId);

// Lista Clientes atraves do Genero
router.get("/:genero", livroController.listarLivrosGenero);

// Adiciona Clientes
router.post("/", livroController.adicionarLivros);

// Atualizar Cliente
router.put("/:id", livroController.listarLivrosId);

// Deletar cliente
router.delete("/id", livroController.deletarLivro);

module.exports = router;