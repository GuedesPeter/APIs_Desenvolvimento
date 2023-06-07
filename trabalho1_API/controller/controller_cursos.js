const cadastro = require('../cadastro_cursos');

function listar_Cursos(req, res) {
    const lista_de_cursos = cadastro.listar_Cursos();
    res.json(lista_de_cursos);
};

function buscar_Id (req, res){
    const id = req.params.id;
    try{
        const curso = cadastro.buscar_Id(id);
        res.json(curso);
    } catch (err){
        res.status(err.numero).json(err);
    }
};

function adicionar_Cursos (req, res){
    const curso = req.body;
    try{
    const add_curso = cadastro.adicionar_Cursos(curso);
    res.status(201).json(add_curso);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}


function atualizar_Curso (req, res){
    const id = req.params.id;
    const curso = req.body;
    try{
        const update_curso = cadastro.atualizar_Curso(id,curso);
        res.json(update_curso);
    }
    catch (err){
        res.status(err.numero).json(err);
    }
}


function deletar_Curso (req, res){
    const id = req.params.id;
    try{
        const del_curso = cadastro.deletar_Curso(id);
        res.json(del_curso);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}




module.exports = {
    listar_Cursos,
    buscar_Id,
    adicionar_Cursos,
    atualizar_Curso,
    deletar_Curso


}