const { Client } = require('pg');

class Prova {

    async buscaProva(req, res) {
        try {
            const client = new Client({
                host: "localhost",
                user: "postgres",
                port: "5432",
                password: "Proibido1",
                database: "db_sala"
            });


            await client.connect();
            const resultado = await client.query("select * from prova ")

            return res.status(200).json(resultado.rows)
        } catch (error) {
            return res.status(500).json({ Error: error })
        }
    }

    async insereProva(req, res) {
        try {
            const { codigo, nome} = req.body
            const client = new Client({
                host: "localhost",
                user: "postgres",
                port: "5432",
                password: "Proibido1",
                database: "db_sala"
            });

            await client.connect();
            const query = `insert into prova(cod_prova, cod_nome) values($1, $2)`
            const values = [codigo, nome]
            const resultado = client.query(query, values)
            return res.status(200).json(resultado)
        } catch (error) {
            console.error("error", error)
            return res.status(500).json({ Error: error })
        }
    }
}

module.exports = new Prova()