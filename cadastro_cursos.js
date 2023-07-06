let listaCursos = [];
let idAutoIncrement = 1;


function listar_Cursos() {
    return listaCursos;
}

function adicionar_Cursos(curso) {
    if(curso && curso.nome && curso.duracao && curso.valor){
        curso.id = idAutoIncrement++;
        listaCursos.push(curso);
        return curso;
    }
    else {
        throw ({
            numero: 400,
            msg: "Erro: Parâmetros Inválidos"
        });
    }
}


function buscar_Id(id) {
    for(let curso of listaCursos) {
        if(curso.id == id) {
            return curso;
        }
    }
    throw {
        numero: 404,
        msg:"ERRO: Curso Não Encontrado."
    }
    
}


function atualizar_Curso(id,alterarCurso){
    if(!alterarCurso || !alterarCurso.nome || !alterarCurso.duracao || !alterarCurso.valor){
        throw ({
            numero: 400,
            msg: "Erro: Parâmetros Inválidos."
        });       
    }
    for(let index in listaCursos){
        if(listaCursos[index].id == id) {
            //A função parseInt converte seu primeiro argumento para uma string, analisa, e retorna um inteiro
            alterarCurso.id = parseInt(id);
            listaCursos[index] = alterarCurso;
            return listaCursos[index];
        }
    }    
    throw ({
        numero: 404,
        msg: "Erro:  Curso Não Encontrado."
    });
}



function deletar_Curso(id) {
    for(let indice in listaCursos){
        if(listaCursos[indice].id == id) {
            const curso_Deletado = listaCursos.splice(indice,1);
            return curso_Deletado[0];
        }
    }
    throw ({
        numero: 404,
        msg: "Erro: Produto nao encontrado."
    });

}


module.exports = {
    listar_Cursos,
    adicionar_Cursos,
    buscar_Id,
    atualizar_Curso,
    deletar_Curso,
    
}