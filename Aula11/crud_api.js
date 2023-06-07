// Instanciando o Framework
const express = require('express');
const cadastroprodutos = require('cadastroprodutos');
const app = express();
const PORT = 3000;
const produtos = [{id:1, nome:"produto 1", preco: 30}];
app.use(express.json());

//READ
app.get('/produtos', (req, res) => {
    const produtoInserido = cadastroprodutos.listar();
    res.json(produtos);
  })

  app.get('/produtos/:id', (req,res) => {
    const id = req.params.id;
    res.json(produtos[0]);
})

//CREATE
app.post('/produtos', (req, res) => {
    const produto = req.body;

    try{
        const produtoInserido = cadastroprodutos.inserir(produto);
        res.status(201).json(produtoInserido);
    }
    catch (err){
        res.status(err.numero).json(err);
    }
})


//UPDATE
app.put('/produtos/:id', (req,res) => {
    const id = req.params.id;
    res.json(produtos[0]);
})

//DELETE
app.delete('/produtos/:id', (req,res) => {
    const id = req.params.id;
    console.log("Delete",id);
    res.json(produtos[0]);
})

//OUVINDO SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor ${PORT} iniciado ...`)
})

