

let listaProdutos = [];
let idAutoIncrement = 1;

function limpar() {
    return listaProdutos = [];
}

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = idAutoIncrement ++;
    if (produto && produto.nome && produto.preco){
    listaProdutos.push(produto);
    }
    else{
        throw {
            numero: 400,
            msg:"ERRO: Os parâmetros de produto estão inválidos."
        }
    }
}

//FOR OF
function buscarPorId(id) {
    for(let produto of listaProdutos) {
        if(produto.id === id) {
            return produto;
        }
    }
    throw {
        numero: 400,
        msg:"ERRO: Os parâmetros de produto estão inválidos."
    }
    
}

//FOR IN
function atualizar(id,produtoAlterar){
    if(!produtoAlterar || !produtoAlterar.nome || !produtoAlterar.preco){
        throw {
            numero: 400,
            msg:"ERRO: Os parâmetros de produto estão inválidos."
        };
    }
    for (let indice in listaProdutos) {
        if(listaProdutos[indice].id === id) {
            produtoAlterar.id = id;
            listaProdutos[indice] = produtoAlterar;
            return listaProdutos[indice];
        }
    }
    throw {
        numero: 400,
        msg:"ERRO: Os parâmetros de produto estão inválidos."
    };
    
}


function deletar(id) {
    for (let indice in listaProdutos) {
        if(listaProdutos[indice].id === id) {
            const produtoDeletado = listaProdutos.splice(indice,1);
            return produtoDeletado;
        }
    }
    throw {
        numero: 400,
        msg:"ERRO: Os parâmetros de produto estão inválidos."
    };
}






module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}
