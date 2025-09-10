
/**********************************************************************************************
 * Objetivo: Criar nossa primeira API
 * Autor: Sidney
 * Data: 10/09/2025
 * Versão: 1.0 

 Conceitos:
 Express e Postman
 npm init -> Incialização do Projeto
 npm install express -> Instalação do Express
 req -> requisição
 res -> resposta

 Rota: Meio pelo qual o Back-End relacion-se com o Front -> chamado tambem de End-points

**********************************************************************************************/


//Importar o módulo do Express
const express = require('express');

//Importar o arquivo das rotas de cliente
const clientRoutes = require('./src/routes/clientRoutes')

//Importar o arquivo das rotas de cliente
const productRoutes = require('./src/routes/productRoutes')

//Criar uma aplicação express
const app = express();

//Definir para que o express analise JSON no corpo das requisições
app.use(express.json())

//Definir a porta em que o servidor irá funcionar (escutar)
const porta = 8000;

//Rota de Teste da API
app.get('/api', (req, res) => {

    res.send("API está funcionando");

})

//Configurando as rotas de cliente
app.use('/api/client', clientRoutes)

//Configurando as rotas de cliente
app.use('/api/product', productRoutes)

//Iniciar o servidor
app.listen(porta, () => { 

    console.log(`Servidor rodando em http://localhost:${porta}`);

})