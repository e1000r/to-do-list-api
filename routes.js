const connection = require('./db');
const express = require('express')
const router = express.Router()
const Controlador = require('./controller')

router.get('/tarefas', Controlador.listarTarefas)
router.get('/tarefa/:id', Controlador.dadosTarefa)
router.post('/nova-tarefa', Controlador.novaTarefa)
router.put('/alterar-tarefa/:id', Controlador.alterarTarefa)
router.put('/marcar-tarefa/:id', Controlador.marcarTarefa)
router.delete('/excluir-tarefa/:id', Controlador.excluirTarefa)

module.exports = router
