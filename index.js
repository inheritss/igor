const express = require('express')
const server = express()
const filmes = require('./src/data/filmes.json')
const igor = require('./src/data/igor.json')

const port = 3000

server.get('/filmes', (req, res) =>{
    return res.json(filmes)
})
server.get('/igor', (req, res) =>{
    return res.json(igor)
})

server.listen(port, () =>{
    console.log('Servidor rodando na porta 3000')
})