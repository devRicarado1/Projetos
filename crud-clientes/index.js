const express = require("express");
const app = express();
const clienteRoutes = require("../crud-clientes/routes/clienteRoutes");

const PORT = 3000;

app.use(express.json());

app.use("/clientes", clienteRoutes);

app.get("/", (req, res) => {
    res.send("API RODANDO COM SUCESSO!")
});

app.listen(PORT, () => {

    console.log("Servidor rodando na porta " + PORT);

});