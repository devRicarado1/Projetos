# CRUD de Clientes com Node.js e Express

Este é um projeto básico de API REST para gerenciamento de clientes, desenvolvido com **Node.js**, **Express** e **MySQL**.

---

## 📌 Funcionalidades

- ✅ Listar todos os clientes
- ✅ Buscar cliente por ID
- ✅ Adicionar novo cliente
- ✅ Atualizar dados de um cliente
- ✅ Remover cliente

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- Postman ou Insomnia para testes de API

---

## 📁 Estrutura do Projeto

crud-clientes/
├── controllers/
│ └── clienteController.js
├── models/
│ └── clienteModel.js
├── routes/
│ └── clienteRoutes.js
├── index.js
├── conexao.js
├── .gitignore
└── README.md

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/devRicarado1/crud-clientes.git
cd crud-clientes

2. Instale as dependências
npm install

3. Configure o banco de dados
Crie um banco MySQL com o nome express e a seguinte tabela:


CREATE TABLE clientes (
  idCliente INT PRIMARY KEY AUTO_INCREMENT,
  nomeCliente VARCHAR(100),
  cpfCliente VARCHAR(14),
  telefoneCliente VARCHAR(20)
);

4. Atualize o arquivo conexao.js com os dados do seu banco

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SENHA_DO_SEU_MYSQL",
  database: "express",
  port: 3306
});

5. Execute o servidor
node index.js
Se tudo estiver correto, a seguinte mensagem será exibida:

Servidor rodando na porta 3000
Conexão estabelecida com o Banco de Dados com Sucesso!
📬 Testes com o Postman
Você pode usar o Postman ou Insomnia para testar os endpoints da API.

▶️ Exemplo de Endpoints
Método	Rota	Descrição
GET	    /clientes	Lista todos os clientes
GET	    /clientes/:id	Busca cliente por ID
POST	/clientes	Adiciona novo cliente
PUT	    /clientes/:id	Atualiza cliente
DELETE	/clientes/:id	Remove cliente

🧪 Exemplo de uso no Postman
✅ POST /clientes
Selecione o método POST

URL: http://localhost:3000/clientes

Vá até a aba Body

Selecione raw e o tipo JSON

Insira o seguinte JSON:

{
  "nomeCliente": "João Silva",
  "cpfCliente": "123.456.789-00",
  "telefoneCliente": "(11) 91234-5678"
}
Clique em Send

🔍 GET /clientes
Método: GET

URL: http://localhost:3000/clientes

👤 Autor
Ricardo – @devRicarado1