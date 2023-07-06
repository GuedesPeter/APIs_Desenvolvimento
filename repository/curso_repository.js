const { Client } = require('pg')
const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'paulo238433',
    database: 'crud_cursos',
};


async function listar_Cursos() {
    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM tabela_cursos')
    const listaCursos = res.rows;
    await cliente.end();
    return listaCursos;
}

async function buscar_Id(id) {
    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM tabela_cursos WHERE id=$1',[id]);
    const curso = res.rows[0];
    await cliente.end();
    return curso;
}

async function adicionar_Cursos(curso) {
    const sql = 'INSERT INTO tabela_cursos(nome, duracao, valor) VALUES ($1,$2,$3) RETURNING *'
    const values = [curso.nome, curso.duracao, curso.valor];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const cursoInserido = res.rows[0];
    await cliente.end();
    return cursoInserido;    
}

async function atualizar_Curso(id, curso) {
    const sql = 'UPDATE tabela_cursos set nome=$1, duracao=$2 , valor=$3 WHERE id=$4 RETURNING *'
    const values = [curso.nome, curso.duracao, curso.valor, id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const cursoAtualizado = res.rows[0];
    await cliente.end();
    return cursoAtualizado;    
}

async function deletar_Curso(id) {
    const sql = 'DELETE FROM tabela_cursos WHERE id=$1 RETURNING *'
    const values = [id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const cursoDeletado = res.rows[0];
    await cliente.end();
    return cursoDeletado;    
}



module.exports = { 
    listar_Cursos,
    buscar_Id,
    adicionar_Cursos,
    atualizar_Curso,
    deletar_Curso,
}