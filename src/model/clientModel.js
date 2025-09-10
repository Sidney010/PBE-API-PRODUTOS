let customers = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com', telefone:'(11)97064-2338', endereco:'Jandira, SP', dataCadastro:'2025/08/31', ativo:'true'},
    {id: 2, name: 'Roberto', email: 'roberto@gmail.com', telefone:'(11)96064-2338', endereco:'Itapevi, SP', dataCadastro:'2025/08/21', ativo:'true'},
    {id: 3, name: 'Josué', email: 'josue@gmail.com', telefone:'(11)97864-2338', endereco:'Jandira, SP', dataCadastro:'2025/05/31', ativo:'false'},
    {id: 4, name: 'Pedro', email: 'pedro@gmail.com', telefone:'(11)97111-4455', endereco:'Barueri, SP', dataCadastro:'2025/07/15', ativo:'true'},
    {id: 5, name: 'Maria', email: 'maria@gmail.com', telefone:'(11)97222-5566', endereco:'Osasco, SP', dataCadastro:'2025/06/20', ativo:'true'},
    {id: 6, name: 'João', email: 'joao@gmail.com', telefone:'(11)97333-6677', endereco:'Carapicuíba, SP', dataCadastro:'2025/04/10', ativo:'false'},
    {id: 7, name: 'Felipe', email: 'felipe@gmail.com', telefone:'(11)97444-7788', endereco:'Cotia, SP', dataCadastro:'2025/09/01', ativo:'true'},
    {id: 8, name: 'Gabriel', email: 'gabriel@gmail.com', telefone:'(11)97555-8899', endereco:'Santana de Parnaíba, SP', dataCadastro:'2025/03/25', ativo:'true'},
    {id: 9, name: 'Julia', email: 'julia@gmail.com', telefone:'(11)97666-9900', endereco:'São Paulo, SP', dataCadastro:'2025/02/14', ativo:'false'},
    {id: 10, name: 'Mateus', email: 'mateus@gmail.com', telefone:'(11)97777-1122', endereco:'Cajamar, SP', dataCadastro:'2025/01/05', ativo:'true'}
];

//Funções que irão simular intregação com o banco de dados

//Função que lista todos os cliente (Comando Select)
const findAllCustomers = () => {
    return customers;
}

//Função que busca um cliente por ID (Comando Select * from cliente where id = 1)
const findByIdCustomer = (id) => {
    return customers.find(customer => customer.id === id)
}

//Função que busca um cliente por Nome (Comando Select * from cliente where name = Alice)
const findByNameCustomer = (name) => {
    return customers.find(customer => customer.name === name)
}

//Função para adicionar um novo cliente (Comando Insert)
const createNewCustomer = (newCustomer) => {
    
    //Gerando o Id do próximo item (cliente)
    //Ver o tamanho do array
    let sizeArrayCustomer = customers.length
    // Operador ternario
    const newIdCustomer = sizeArrayCustomer > 0 ? customer[sizeArrayCustomer - 1].id + 1 : 1;

    //Criando um novo cliente com o id novo
    const customerWithId = {id: newIdCustomer, ...newCustomer}

    //Adicionar o customerWithId no array users
    costumers.push(customerWithId)

    //Retornar o cliente cadastrado
    return customerWithId

}
//Função para atualizar dados de um cliente
const updateCustomer = (dataCustomers) => {
    
    //Descobrir o index do elemento para atualizar
    const index = customers.findIndex(customer => customer.id === dataCustomers.id)

    //Alterando os dados
    customers[index] = dataCustomers

    return  customers[index]



}
//Função para deletar o cliente através do id
const deleteCustomer = (id) => {

    //Descobrir o index do elemento para excluir
    const index = customers.findIndex(customer => customer.id === dataCustomers.id)

    if(index !== -1){
        const [deleteCustomers] = customers.splice(index, 1)
        return deleteCustomers
    }

    return null
}


module.exports = {
    findAllCustomers,
    findByIdCustomer,
    findByNameCustomer,
    createNewCustomer,
    deleteCustomer,
    updateCustomer
}