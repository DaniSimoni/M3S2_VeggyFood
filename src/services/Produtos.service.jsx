const API_URL = 'http://localhost:3000/products';

const GetProdutos = async () => {
    const response = await fetch(API_URL);
    const produtos = await response.json();

    return produtos;
}

const GetProdutosByQuery = async (query) => {
    const response = await fetch(`${API_URL}?q=${query}`);
    const produtos = await response.json();

    return produtos;
}

const GetProdutosById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const produto = await response.json();

    return produto;
}

const CreateProduto = async (data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            name: data.name,
            category: data.category,
            price: data.price,
            amount: data.amount,
            image: data.image,
            description: data.description,
        }),
        headers: {
            'content-type': 'application/json'
        },
    });

    const newProduto = await response.json();

    return newProduto;
}

const UpdateProduto = async (id, data) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: data.name,
            category: data.category,
            price: data.price,
            amount: data.amount,
            image: data.image,
            description: data.description,
        }),
        headers: {
            'content-type': 'application/json'
        },
    });

    const newProduto = await response.json();

    return newProduto;
}

const DeleteProduto = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
    .then(async (data) => {
        await data.json();
    })
    .catch((error) => {
        console.error(error);
    });
}

export const ProdutosService = {
    GetProdutos,
    GetProdutosByQuery,
    GetProdutosById,
    CreateProduto,
    UpdateProduto,
    DeleteProduto,
}