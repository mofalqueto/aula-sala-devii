const express = require("express");

const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log("O servidor está ativo na porta 8080");
});

//CRUD - Create Read Update Delete
//POST GET PUT DELETE

app.get('/', () => {
    console.log('O TREM DEU CERTO!!!');
});

//SELECT * FROM Alunos WHERE id = 123
app.get('/getAluno', (req, res) => {
    const { id } = req.body;
    console.log(`O aluno de ID: ${id} foi encontrado`);
    res.send(`O aluno de ID: ${id}
    foi encontrado`);
})