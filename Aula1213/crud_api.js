// Instanciando o Framework
const express = require('express');

const app = express();
const PORT = 3000;
const produtos = [{id:1, nome:"produto 1", preco: 30}];

app.use(express.json());

app.use(express.Router());




//OUVINDO SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor ${PORT} iniciado ...`)
})

