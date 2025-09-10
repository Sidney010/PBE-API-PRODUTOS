// 1° Passo - importar o userModel
// .. -> acessar a pasta anterior
const clientModel = require('../model/clientModel');

//Função do controller que lista os clientes
// req -> requisição
// res -> resposta
const getAllCustomersController = (req, res) => {

    //Chamando a função findAllCustomers do model
    const customers = clientModel.findAllCustomers();

    //Devolver uma resposta para usuário
    res.status(200).json(customers)

}
//Função do controller que obtem um cliente por ID
const getCustomerByIdController = (req, res) => {
    
    //Pegando o Id que foi enviado na requisição
    const id = parseInt(req.params.id)

    //Chamar o metodo findByIdCustomer do customerModel
    const customer = clientModel.findByIdCustomer(id)

    if(customer){
        //Responder com status code 200 (sucesso)
        // e devolver os dados do cliente em formato json
        res.status(200).json(customer)

    } else {
        res.status(404).json({mensagem: 'Cliente não encontrado'})
    }

}
//Função do controller que obtem um cliente pelo Nome
const getCustomerByNameController = (req, res) => {
    
    //Pegando o Id que foi enviado na requisição
    const name = String(req.params.name)

    //Chamar o metodo findById do customerModel
    const customer = clientModel.findByNameCustomer(name)

    if(customer){
        //Responder com status code 200 (sucesso)
        // e devolver os dados do cliente em formato json
        res.status(200).json(customer)

    } else {
        res.status(404).json({mensagem: 'Cliente não encontrado'})
    }

}
//Função do controller que cria um novo cliente
const createCustomerController = (req, res) => {

    //Pegando os dados que foram enviados pelo Body da requisição
    const {name, email, telefone, endereco, dataCadastro, ativo} = req.body

    if(!name || !email || !telefone || !endereco || !dataCadastro || !ativo){
        res.status(400).json({mensagem: 'Nome, email, telefone, endereco, dataCadastro e ativo são campos de preenchimento obrigatórios'})

    } else {
        const newCustomer = clientModel.createNewCustomer({name, email, telefone, endereco, dataCadastro, ativo})
        res.status(201).json(newCustomer)
    }

}
//Metodo do contralador para editar um cliente
const updateCustomerController = (req, res) => {

    //1° Passo - pegar os dados que foram envidos pelo Body (corpo) da requisição
    const {name, email, telefone, endereco, dataCadastro, ativo} = req.body

    //Validar se foi enviado o id
    if(!id){
        return res.status(400).json({mensagem:'O id do cliente é obrigatório'})
    }else{
        const dataCustomer = clientModel.updateCustomer({name, email, telefone, endereco, dataCadastro, ativo})
        res.status(200).json(dataCustomer)
    }
} 
//Função para deletar usuario
const removeCustomerController = (req, res) => {
    
    //Pegando o Id que foi enviado na requisicao
    const id = parseInt(req.params.id)

    //Excluir o cliente e retornar
    const removedCustomer = clientModel.deleteCustomer(id)
    if(removeCustomerController){
        res.status(200).json(removedCustomer)
    }else{
        res.status(400).json({mensagem: 'Informe o id do cliente corretamente'})
    }
    
}

module.exports = {
    getAllCustomersController,
    getCustomerByIdController,
    getCustomerByNameController,
    createCustomerController,
    removeCustomerController,
    updateCustomerController
}