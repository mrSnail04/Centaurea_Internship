import axios from "axios";

const i = axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})


const login = async (login, password) => {
    i.post('/auth/token/login', {
        username: login,
        password: password
    }).then((response) => {
        console.log("login:", response);
        return response;
    }).catch((error) => {
        console.log(error)
    })
}

const me = async () => {

    return {name: "Maksim"};
}


export const API = {
    login,
    me
}