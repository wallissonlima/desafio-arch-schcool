const { Client } = require('pg');

class Aluno {

    async buscaAlunos(req, res) {
        try {
            const client = new Client({
                host: "localhost",
                user: "postgres",
                port: "5432",
                password: "Proibido1",
                database: "db_sala"
            });
            const { id } = req.params
            await client.connect();
            const resultado = await client.query(`select * from aluno where cod_aluno = ${id}`)
            return res.status(200).json(resultado.rows)
        } catch (error) {
            return res.status(500).json({ Error: error })
        }
    }

    async insereAluno(req, res) {
        try {
            const { codigo, nome, telefone, email } = req.body
            const client = new Client({
                host: "localhost",
                user: "postgres",
                port: "5432",
                password: "Proibido1",
                database: "db_sala"
            });

            await client.connect();
            const query = `insert into aluno(cod_aluno, nome_aluno, telefone_aluno, email_aluno) values($1, $2, $3, $4)`
            const values = [codigo, nome, telefone, email]
            const resultado = client.query(query, values)
            return res.status(200).json(resultado)
        } catch (error) {
            console.error("error", error)
            return res.status(500).json({ Error: error })
        }
    }
}

module.exports = new Aluno()