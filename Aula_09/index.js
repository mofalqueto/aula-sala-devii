const express = require("express");

const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");

const app = express();

app.listen(8081, () => {
    console.log("O servidor está ativo na porta 8081");
})

const segredo = "MeuSegredo";

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    
    //if token=null || token=false
    if (!token) {
        res.status(401).json({ message:'Token não fornecido!'})    
    }

    try{
        const decodificado = jwt.verify(token, segredo);
        req.user = decodificado;
        next()
    }catch (err){
        res.status(403).json({message:'Token inválido!'});
    }

}

app.post("/login", (req,res) => {
    const user = {
        id: 123,
        name: 'Monica',
        password: '123Mo',
    }

    const token = jwt.sign(user, segredo);
    res.status(200).json({token});
})

app.get("/userProtegido", verifyToken, (req, res) => {

        const {id, name, password} = req.user;

        res.status(200).json({id, name, password})
    })