let products = [
    {id: 1, name: 'Camiseta', descricao:'Branca, Tamanhos: P, M, G e GG', preco: 123.56, categoria:'Casual', estoque: 100, ativo:'true'},
    {id: 2, name: 'Blusa', descricao:'Moletom Cinza, Tamanhos: P, M e G', preco: 189.90, categoria:'Casual', estoque: 50, ativo:'true'},
    {id: 3, name: 'Calça', descricao:'Jeans Azul, Tamanhos: 36 ao 48', preco: 210.00, categoria:'Casual', estoque: 75, ativo:'true'},
    {id: 4, name: 'Tênis', descricao:'Esportivo, cor Preta, numeração 37 a 44', preco: 320.00, categoria:'Esporte', estoque: 60, ativo:'true'},
    {id: 5, name: 'Gorro', descricao:'Lã Preto, tamanho único', preco: 59.90, categoria:'Acessório', estoque: 120, ativo:'true'},
    {id: 6, name: 'Boné', descricao:'Aba curva, Azul marinho, tamanho ajustável', preco: 79.90, categoria:'Acessório', estoque: 80, ativo:'true'},
    {id: 7, name: 'Casaco', descricao:'Inverno, Forrado, Tamanhos: M, G e GG', preco: 399.99, categoria:'Inverno', estoque: 40, ativo:'true'},
    {id: 8, name: 'Jaqueta', descricao:'Couro sintético, cor Preta, Tamanhos: P, M e G', preco: 459.00, categoria:'Inverno', estoque: 35, ativo:'true'},
    {id: 9, name: 'Vestido', descricao:'Floral, cores variadas, Tamanhos: P, M e G', preco: 289.50, categoria:'Casual', estoque: 55, ativo:'true'},
    {id: 10, name: 'Sandália', descricao:'Couro marrom, numeração 34 a 41', preco: 149.90, categoria:'Calçados', estoque: 70, ativo:'true'}
];

//Funções que irão simular intregação com o banco de dados

//Função que lista todos os produtos (Comando Select)
const findAllProducts = () => {
    return products;
}

//Função que busca um produto por ID (Comando Select * from produto where id = 1)
const findByIdProduct = (id) => {
    return products.find(product => product.id === id)
}

//Função que busca um produto por Nome (Comando Select * from produtos where name = Casaco)
const findByNameProduct = (name) => {
    return products.find(product => product.name === name)
}

//Função para adicionar um novo produto (Comando Insert)
const createNewProduct = (newProduct) => {
    
    //Gerando o Id do próximo item (produto)
    //Ver o tamanho do array
    let sizeArrayProducts = products.length
    // Operador ternario
    const newIdProduct = sizeArrayProducts > 0 ? product[sizeArrayProducts - 1].id + 1 : 1;

    //Criando um novo produto com o id novo
    const productWithId = {id: newIdProduct, ...newProduct}

    //Adicionar o productWithId no array users
    product.push(productWithId)

    //Retornar o produto cadastrado
    return productWithId;

}
//Função para atualizar dados de um produto
const updateProduct = (dataProducts) => {
    
    //Descobrir o index do elemento para atualizar
    const index = products.findIndex(product => product.id === dataProducts.id)

    //Alterando os dados
    products[index] = dataProducts

    return  products[index]



}
//Função para deletar o produtos através do id
const deleteProduct = (id) => {

    //Descobrir o index do elemento para excluir
    const index = products.findIndex(product => product.id === id)

    if(index !== -1){
        const [deleteProducts] = products.splice(index, 1)
        return deleteProducts
    }

    return null
}


