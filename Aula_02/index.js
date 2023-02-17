const express = require("express")

const app = express()

app.listen(8080, () => {console.log("O server está ativo na porta 8080");});


let nome = "Monica"
let cor = "green"

app.get("/", (get, res) => {
    res.send('<h1 styles="color">Olá ${nome}!!!</h1>')
});

app.post("/getHTML", (req, res) => {
    const { nome } = req.body;
    console.log ('Olá ${nome}');
})


