const express = require("express");
const { pool } = require("./data/data");
const app = express();
app.use(express.json());
app.listen(8080, () => {
    console.log("O servidor está ativo na porta 8080!!!")
});

app.get("/getUsers", async (req, res) => {
    try {
        const client = await pool.connect();
        const { rows } = await client.query
        ("SELECT * FROM Users");
        console.table(rows);
        res.status(200).send(rows);
    }catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor")
    }
});

app.post("/postUsers/", async(req, res) => {
    try {
            const client = await pool.connect();
            const { id, nome } = req.body;
            const { rows } = await client.query('INSERT INTO Users (id, nome) VALUES ($1, $2)', [id, nome]);
            res.status(200).send(`Pessoa criada com sucesso.`);
         
    }catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor")
    }
})


app.put("/putUsers/", async(req, res) => {
    try {
            const client = await pool.connect();
            const { id, nome } = req.body;
            console.log(id, nome);
            const { rows } = await client.query('UPDATE Users SET nome = $1 WHERE id = $2',[nome, id]);
            res.status(200).send(`Pessoa alterada com sucesso.`);
         
    }catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor")
    }
})

app.delete("/deleteUsers/", async(req, res) => {
    try {
            const client = await pool.connect();
            const { id } = req.body;

            const { rows } = await client.query('DELETE from Users WHERE id = $1',[id]);
            res.status(200).send(`Pessoa deletada com sucesso.`);
         
    }catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor")
    }
})