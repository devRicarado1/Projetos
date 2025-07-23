# 📚 CRUD de Livros - Node.js + Express

Este é um projeto simples de CRUD (Create, Read, Update, Delete) para gerenciamento de livros, desenvolvido com **Node.js**, **Express** e **MySQL**. 
O objetivo principal é permitir a manipulação de dados de livros via API REST.

## 🚀 Funcionalidades

- 🔍 Listar todos os livros
- 📖 Buscar livro por ID
- 🔎 Buscar livro por gênero
- ➕ Adicionar novo livro
- 📝 Atualizar dados de um livro
- ❌ Remover livro

## 📦 Estrutura do Projeto

crud-livros/
├── controllers/ # Lógica das requisições
├── models/ # Conexão e queries SQL
├── routes/ # Rotas da aplicação
├── db/ # Conexão com MySQL
├── index.js # Inicialização do servidor
└── README.md # Documentação do projeto

## 🔌 Rotas da API

| Método | Rota                          | Descrição                    |
|--------|-------------------------------|------------------------------|
| GET    | /livros                       | Lista todos os livros        |
| GET    | /livros/idLivro/:idLivro      | Busca livro por ID           |
| GET    | /livros/genero/:generoLivro   | Busca livros por gênero      |
| POST   | /livros                       | Cadastra um novo livro       |
| PUT    | /livros/:idLivro              | Atualiza um livro            |
| DELETE | /livros/:idLivro              | Deleta um livro              |

## 📋 Requisitos

- Node.js
- MySQL

## ⚙️ Como rodar o projeto

```bash
# Instalar dependências
npm install

# Iniciar o servidor
node index.js
Acesse em: http://localhost:3000/livros

📬 Testes com Insomnia
Utilize o Insomnia para testar as rotas. Envie os dados no formato JSON conforme exemplo abaixo:

{
  "tituloLivro": "E assim que acaba",
  "autorLivro": "Colleen Hoover",
  "dataPublicacaoLivro": "2025-07-11",
  "generoLivro": "Romance"
}

🧠 Aprendizados
Criação de APIs com Express

Separação por camadas (Controller, Model, Route)

Comunicação com banco MySQL

Boas práticas REST