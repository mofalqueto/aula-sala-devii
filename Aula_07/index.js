const express = require("express");

const app = express();

app.use(express.json())

app.listen(8080, () => {
        console.log("O server está ativo na porta 8080");
});
//comandar npm start para testar o servidor
// ctrl + C para parar o servidor no terminal 
let Alunos = ['Maria', 'Joao', 'Jose'];

//para criar uma rota de post

app.post('/includeAluno', (req, res) => {
    const { nome } = req.body; 

    res.send(`<h1> Olá ${nome}, Bem vindo!`);
});

//READ

app.get('/getAlunos', (req, res) => {
    const { index } = req.body;
    //connect SQL - 
    //select * from Alunos Where id = index
    res.send(`<h1> O aluno ${Alunos[index]} foi encontrado</h1>`);
});

app.get('/getAlunos', (req, res) => {
    // select  * from Alunos
    console.log(Alunos);
    res.send('Todos os alunos cadastrados são: ${Alunos}')
});


//update

app.put('/updateAluno', (req, res) => {
    // update  nome from Alunos where id = index;
    const {index, nome} = req.body;
    Alunos[index] = nome;
    res.send("<h1> O nome foi atualizado com sucessp!!!</h1>");
    console.log(Alunos);
});


//delete

app.delete('/deleteAluno', (req, res) => {
    // DELETE FROM Alunos WHERE id = index;
    const { index } = req.body;
    Alunos.splice(index, 1);
    res.send(`Alunos apos o DELETE: ${Alunos}`);
});