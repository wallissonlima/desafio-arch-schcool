const e = require('cors');
const { Client } = require('pg');

class AlunoProva {

    async buscaAlunoProva(req, res) {
        try {
            const client = new Client({
                host: "localhost",
                user: "postgres",
                port: "5432",
                password: "Proibido1",
                database: "db_sala"
            });

            const { id, idProva } = req.params

            await client.connect();
            const prova = await client.query(`select * from alunoprova where cod_aluno = ${id}`)

            let valorTotalNotas = 0;

            for (var i = 0; i < prova.rows.length; i++) {
                valorTotalNotas = (valorTotalNotas + prova.rows[i].nota);
            }

            const totalDeProvasAplicadas = prova.rows.length;
            const mediaAluno = (valorTotalNotas / totalDeProvasAplicadas)

            if (mediaAluno > 70) {
                return res.status(200).json('Aluno Aprovado!')
            } else if (mediaAluno <= 60 && mediaAluno >= 40) {
                return res.status(200).json('Aluno em Recuperação!')
            } else {
                return res.status(200).json('Aluno Reprovado!')
            }

        } catch (error) {
            console.error("error", error)
            return res.status(500).json({ Error: error })
        }
    }

    async insereAlunoProva(req, res) {
        try {
            const { codigo, aluno, prova, nota } = req.body
            console.log("body", req.body)
            const client = new Client({
                host: "localhost",
                user: "postgres",
                port: "5432",
                password: "Proibido1",
                database: "db_sala"
            });

            await client.connect();
            const query = `insert into alunoprova(cod_alunoprova, cod_aluno, cod_prova, nota) values($1, $2, $3, $4)`
            const values = [codigo, aluno, prova, nota]
            const resultado = client.query(query, values)
            return res.status(200).json(resultado)
        } catch (error) {
            console.error("error", error)
            return res.status(500).json({ Error: error })
        }
    }
}

module.exports = new AlunoProva()