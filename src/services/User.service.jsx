const API_URL = 'http://localhost:3000/users';

const GetUsers = async () => {
    const response = await fetch(API_URL);
    const user = await response.json();
    
    return user;
}

const CreateUser = async (newUser) => {

    await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            email: newUser.email,
            password: newUser.password,
        }),
        headers: {
            "content-type": "application/json",
        },
    })
    .then(async (data) => {
        await data.json();
        console.log("Cadastrado com sucesso");
    })
    .catch((err) => {
        console.error("Erro ao cadastrar: ", err);
    });
}

const Show = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const user = await response.json();
    return user;
}

const ShowByEmail = async (email) => {
    let filter = `?`;

    if(email) {
        filter += `email=${email}&`;
    }
    const response = await fetch(`${API_URL}/${filter}`);
    const users = await response.json();
    return users[0];
}

export const UserService = {
    GetUsers,
    CreateUser,
    Show,
    ShowByEmail,
}