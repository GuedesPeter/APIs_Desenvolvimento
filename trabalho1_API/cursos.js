
const express = require('express');
const cursosRota = require('./rotas/rotas_cursos');

const exp = express();
const PORTA = 3000;



//Função usada para o fremework reconhecer insformações JSON
exp.use(express.json());

exp.use('/cursos', cursosRota);


//OUVINDO O SERVIDOR
exp.listen(PORTA, () => {
    console.log(`Servidor ${PORTA} iniciado ...`)
})