const express = require("express");
const app = express();
const empresa = require("./router/empresa.router")

const port = 3000;

app.use("/empresa", empresa);

app.get("/", (rec, res) => {
    res.send("Hello, World!");
});

app.get("/contato", (rec, res) => {
    res.send("Nosso contato: email@email.com");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);    
});