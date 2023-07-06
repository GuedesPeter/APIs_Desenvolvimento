const cadastro = require('../cadastro_cursos');
const repositoryCursos = require('../repository/curso_repository')

async function listar_Cursos(req, res) {
    const lista_de_cursos = await repositoryCursos.listar_Cursos();
    res.json(lista_de_cursos);
};


async function buscar_Id (req, res){
    const id = req.params.id;
    const curso = await repositoryCursos.buscar_Id(id);
    if(curso){
        res.json(curso);
    }
    else{
        res.status(404).json({
            numero: 404,
            msg:"Erro: Curso não encontrado."
        })
    }
};


async function adicionar_Cursos (req, res){
    const curso = req.body;
    if(curso && curso.nome && curso.duracao && curso.valor){
        const cursoInserido = await repositoryCursos.adicionar_Cursos(curso);
        res.status(201).json(cursoInserido);
    }
    else {
        res.status(400).json({
            numero: 400,
            msg: "Erro: Os parâmetros estão inválidos!"
        });
    }
}


async function atualizar_Curso (req, res){
    const id = req.params.id;
    const curso = req.body;

    if(curso && curso.nome && curso.duracao && curso.valor){
        const cursoAtualizado = await repositoryCursos.atualizar_Curso(id, curso);
        if(cursoAtualizado){
            res.json(cursoAtualizado);
        }
        else{
            res.status(404).json({
                numero: 404,
                msg: "Erro: Curso não encontrado!"
            });
        }
    }
    else{
        res.status(400).json({
            numero: 400,
            msg: "Erro: Os parâmetros estão inválidos!"
        });
    }
    
}


async function deletar_Curso (req, res){
    const id = req.params.id;
    const cursoDeletado = await repositoryCursos.deletar_Curso(id);

    if(cursoDeletado){
        res.json(cursoDeletado);
    }
    else{
        res.status(404).json({
            numero: 404,
                msg: "Erro: Curso não encontrado!"
        });
    }
}





module.exports = {
    listar_Cursos,
    buscar_Id,
    adicionar_Cursos,
    atualizar_Curso,
    deletar_Curso,
   


}