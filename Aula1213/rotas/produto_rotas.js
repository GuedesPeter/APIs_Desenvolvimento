const express = require('express');
// Importando o arquivo com as funções de crud
const cadastroProdutos = require('../cadastro_produtos.js');

const router = express.Router();

router.get('/', (req, res) => {
    const listaprodutos = cadastroProdutos.listar();
    res.json(produtos);
  })

  router.get('/:id', (req,res) => {
    const id = req.params.id;
    res.json(produtos[0]);
})

//CREATE
router.post('/', (req, res) => {
    const produtos = req.body;

    try{
        const produtoInserido = cadastroProdutos.inserir(produto);
        res.status(201).json(produtoInserido);
    }
    catch(err){
        res.status(err.numero).json(err);
    }

    
})

//UPDATE
router.put('/:id', (req,res) => {
    const id = req.params.id;
    res.json(produtos[0]);
})

//DELETE
router.delete('/:id', (req,res) => {
    const id = req.params.id;
    console.log("Delete",id);
    res.json(produtos[0]);
})