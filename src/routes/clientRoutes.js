//1° Passo - Importar o express
const express = require('express');

//2° Passo - Criar um router
const router = express.Router();
const clientController = require('../controller/clientController')

//3 Passo - Criar as Rotas dos Clientes
router.get('/list', clientController.getAllCustomersController);

//Criando a rota que ira Obter os dados do cliente por Id
//localhost:8000/api/client/
router.get('/:id', clientController.getCustomerByIdController);

//Criando a rota que ira Obter os dados do cliente por Id
//localhost:8000/api/user/
router.get('/:name', clientController.getCustomerByNameController);


//Criando uma rota que ira Criar um novo cliente
//localhost:8000/api/client/
router.post('/', clientController.createCustomerController);

//Criando uma rota que ira Deletar cliente
//localhost:8000/api/client/
router.delete('/:id', clientController.removeCustomerController)

//Criando uma rota que ira Atualizar cliente
//localhost:8000/api/client/
router.put('/', clientController.updateCustomerController)


module.exports = router