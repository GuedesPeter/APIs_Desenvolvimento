
const cadastroProdutos = require('./cadastro_produtos')


//console.log('Produtos: ',cadastroProdutos.listar())

//JSON como parâmetro---------------------------------------------------------

try{
    cadastroProdutos.inserir({
        nome: "arroz",
        preco: 5

    })

    //console.log('Produtos: ',cadastroProdutos.listar())

    //JSON como parâmetro----------------------------------------------------------
    cadastroProdutos.inserir({
        nome: "feijão",
        preco: 8

    })
    //console.log('Produtos: ',cadastroProdutos.listar())

    cadastroProdutos.inserir({
        nome:"Sal",
        preco: 2
    })

}catch (err) {
    console.log("Ocorreu um erro");
    console.log(err);
}

console.log('Produtos: ',cadastroProdutos.listar())

console.log('Buscar por Id(2): ',cadastroProdutos.buscarPorId(2));
console.log('Buscar por Id(3): ',cadastroProdutos.buscarPorId(3));

cadastroProdutos.atualizar(1, {nome:"arroz",preco:4.5});

cadastroProdutos.deletar(3);

console.log('Produtos: ',cadastroProdutos.listar());


