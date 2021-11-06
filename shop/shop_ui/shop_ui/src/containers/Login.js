import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {API} from "../api/api";

export const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");


    const changeLogin = (e) => {
        let newLogin = e.currentTarget.value;
        //validation
        setLogin(newLogin);
    }

    const changePassword = (e) => {
        let newPassword = e.currentTarget.value;
        //validation
        setPassword(newPassword);
    }

    const submit = async () => {
        let result = await API.login(login, password);
        console.log(result);
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center">Авторизация</h3>
                <hr/>
                <input type="text" onChange={changeLogin} placeholder={"login"} value={login}/>
                <input type="password" onChange={changePassword} placeholder={"password"} value={password}/>
                <button onClick={submit}>Войти</button>
            </div>
        </div>
    );
}
