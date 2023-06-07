
// Instanciando o Framework
const express = require('express');
const app = express();
const PORT = 3000;

// Criando as ROTAS

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produtos', (req, res) => {
    res.send('Listagem de produtos!')
  })

app.post('/produtos', (req, res) => {
    res.send('Criando Produtos')
 }) 


app.listen(PORT, () => {
  console.log(`Servidor ${PORT} iniciado ...`)
})


