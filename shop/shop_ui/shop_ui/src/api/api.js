import axios from "axios";
import React from 'react';


const i = axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

let notAuthorized;
export const setCallbackFor401 = (callback) => {
    notAuthorized = callback;
}


i.interceptors.request.use(config => {
    if (config.url === '/auth/token/login' || config.url === '/auth/users/') {
        return config
    }
    config.headers['Authorization'] = localStorage.getItem("auth_token") ? 'Token ' + localStorage.getItem("auth_token") : null;
    return config;
});

i.interceptors.response.use(response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            notAuthorized && notAuthorized();
        }
        return Promise.reject(error);
    }
)

const login = async (login, password) => {
    return i.post('/auth/token/login', {username: login, password: password})
        .then((response) => {
            if (response?.data?.auth_token) {
                localStorage.setItem('auth_token', response.data['auth_token']);
                return response;
            } else {
                return "error: auth_token not found"
            }
        }, (error) => {
            console.log(error)
        })
}

const registration = async (username, password, firstname, lastname, email) => {
    return i.post('/auth/users/', {
        username: username,
        password: password,
        first_name: firstname,
        last_name: lastname,
        email: email,
    }).then((response) => {
        return response
    }).catch((error) => {
        console.log(error)
    })
}

const logout = async () => {
    return i.get('/api/logout').then((response) => {
        localStorage.removeItem('auth_token')
        return notAuthorized();
    }).catch((error) => {
        console.log(error)
    })
}

const me = async () => {
    return i.get('/auth/users/me').then((response) => {
        let user = response.data // {"first_name":"...","last_name":"...","email":"...","id":...,"username":"..."}
        return user;
    })
        .catch((error) => {
            console.log(error)
        })
}


export const API = {
    login,
    registration,
    logout,
    me
}