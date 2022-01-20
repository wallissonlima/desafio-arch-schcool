const router = require('express').Router();
const cors = require('cors');
const AlunoModels = require('./models/Aluno');
const ProvaModels = require('./models/Prova');
const AlunoProvaModels = require('./models/AlunoProva');

router.use(cors());

router.get('/alunos/:id', AlunoModels.buscaAlunos)
router.post('/alunos', AlunoModels.insereAluno)


router.get('/provas', ProvaModels.buscaProva)
router.post('/provas', ProvaModels.insereProva)

router.get('/alunoprovas/:id', AlunoProvaModels.buscaAlunoProva)
router.get('/alunoprovas', AlunoProvaModels.buscaAlunoProva)
router.post('/alunoprovas', AlunoProvaModels.insereAlunoProva)

module.exports = router

