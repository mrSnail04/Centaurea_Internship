import axios from "axios";


const i = axios.create({
    baseURL: "https://ancient-oasis-20487.herokuapp.com",
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
        console.log(error)
        if (error.response.status === 401) {
            notAuthorized && notAuthorized();
        }
        return Promise.reject(error);
    }
)

const login = async (login, password) => {
    return i.post('/auth/token/login', {username: login, password: password})
        .then((response) => {
            console.log(response)
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
        email: email
    }).then(
        //resolved
        async (response) => {
            {console.log(response)}
            let data = await login(username, password);
            if (data && data.status === 200) {
                return response
            } else {
                console.log("Ошибка аутентификации")
            }
        },
        //rejected
        (error) => {
            return <h1>error</h1>;
        })
}

const logout = async () => {
    return i.get('/api/logout').then((response) => {
        {console.log(response)}
        localStorage.removeItem('auth_token')
        return notAuthorized();
    }).catch((error) => {
        return <h1>error</h1>;
    })
}

const user_is_admin = async (id) => {
    return i.get(`/api/user-admin/${id}`).then((response) => {
        if (response.data && response.data.is_staff) {
            return response.data;
        }
        else {
            return null;
        }
    }).catch((error) => {
        console.log(error)
        return error;
    })
}

const me = async () => {
    return i.get('/auth/users/me').then(
        async (response) => {
            let user = response.data; // {"first_name":"...","last_name":"...","email":"...","id":...,"username":"..."}
            return user;
    }).catch((error) => {
        return <h1>error</h1>;
    })
}

const cartUser = async () => {
    return i.get('/api/cart/current_customer_cart').then((response) => {
        let cart = response.data
        return cart;
    }).catch((error) => {
        return <h1>error</h1>;
    })
}

const changeQty = async (count, product) => {
    return i.patch(`api/cart/current_customer_cart/change_qty/${count}/${product.id}/`
    ).then((response) => {
        if (response.status === 200) {
            return (response);
        }
    }).catch((error) => {
        return <h1>error</h1>;
    })
}

const deleteProduct = async (product) => {
    return i.put(`api/cart/current_customer_cart/remove_from_cart/${product.id}/`
    ).then((response) => {
        return response;
    }).catch((error) => {
        return <h1>error</h1>;
    })
}

const events = async () => {
    return i.get('api/event/all_events').then((response) => {
        return response;
    }).catch((error) => {
        console.log(error);
    })
}

const event = async (slug) => {
    return i.get(`api/event/${slug}`).then((response) => {
        return response;
    }).catch((error) => {
        return <h1>error</h1>;
    })
}

export const API = {
    login,
    registration,
    logout,
    me,
    cartUser,
    changeQty,
    deleteProduct,
    events,
    event,
    user_is_admin,
    add_event,
}