function printMaior (numero1, numero2) {
    let maior = (numero1 >= numero2) ?numero1 :numero2;
    console.log("Maior: ", maior);
}

function getMaior (numero1, numero2) {
    let maior = (numero1 >= numero2) ?numero1 :numero2;
    return(maior);
}


//PERMITE que as FUNÇÕES SEJAM EXPORTADAS PARA OUTROS ARQUIVOS
module.exports = { 
    printMaior, getMaior
}
