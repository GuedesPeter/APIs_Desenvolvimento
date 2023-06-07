const express = require('express');
const cadastro = require('../cadastro_cursos');
const controller = require('../controller/controller_cursos');

const router = express.Router();

router.get('/', controller.listar_Cursos);
router.get('/:id', controller.buscar_Id);
router.post('/', controller.adicionar_Cursos);
router.put('/:id', controller.atualizar_Curso);
router.delete('/:id', controller.deletar_Curso);

module.exports = router;
