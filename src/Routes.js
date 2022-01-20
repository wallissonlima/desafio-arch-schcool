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
router.post('/alunoprovas', AlunoProvaModels.insereAlunoProva)

// buscar unica pro aluno

// buscas de provas: OK 
// busca de prova unica pro professor
// insere provas: OK


// insere aluno-prova: OK
// busca geral de aluno-prova: OK
// busca unica aluno prova



module.exports = router

