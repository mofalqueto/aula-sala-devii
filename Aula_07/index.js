const express = require("express");

const app = express();

app.use(express.json())

app.listen(8080, () => {
        console.log("O server está ativo na porta 8080");
});
//comandar npm start para testar o servidor
// ctrl + C para parar o servidor no terminal 

//para criar uma rota de post

app.post('/includeAluno', (req, res) => {
    const { nome } = req.body; 

    res.send(`<h1> Olá ${nome}, Bem vindo!`);

});

