const express = require("express");
const app = express();
const livrosRoutes = require("../crud-livros/routes/livrosRoutes");

const PORT = 3000;

// Para aceitar o json
app.use(express.json());

app.use("/clientes", livrosRoutes);

app.get("/", (req, res) => {
    res.send("API RODANDO COM SUCESSO!");
});

app.listen(PORT, () => {
    console.log("API rodando na Porta" + PORT);
});