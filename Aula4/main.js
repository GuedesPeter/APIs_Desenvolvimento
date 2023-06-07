// Criando CRUD - Exercício 1

// Parte 1 : CREATE / READ ...

const listaProdutos = [];


// FUNÇÕES


function inserirProduto(nome,preco){
    listaProdutos.push({nome,preco});
    nome = nome,
    preco = preco
};

function lerProdutos(){
    console.log(listaProdutos);
}

// Usando Funções CREATE e READ
inserirProduto('Coca Cola',8.95);
inserirProduto('Pepsi',8.35);
inserirProduto('Amstel',7.47);
lerProdutos();
