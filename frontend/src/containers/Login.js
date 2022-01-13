import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {API} from "../api/api";


export const Login = (props) => {

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
        console.log(login, password);
        if (result.data && result.data['auth_token']) {
            await props.getUser();
            await props.getEvent();
            await props.getCart();
        }
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center">Авторизация</h3>
                <hr/>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width: '100px'}} className="input-group-text">Login</span>
                    </div>
                    <div>
                        <input type="text" className="form-control" onChange={changeLogin} placeholder={"Login"} value={login}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width: '100px'}} className="input-group-text">Password</span>
                    </div>
                    <div>
                        <input type="password" className="form-control" onChange={changePassword} placeholder={"Password"} value={password}/>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={submit}>Войти</button>
            </div>
        </div>
    );
}
