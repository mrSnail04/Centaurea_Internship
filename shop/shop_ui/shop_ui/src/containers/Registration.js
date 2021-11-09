import React, {useState} from 'react';
import {API} from "../api/api";

export const Registration = (props) => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");


    const changeUserName = (e) => {
        let newUserName = e.currentTarget.value;
        //validation
        setUserName(newUserName);
    }

    const changePassword = (e) => {
        let newPassword = e.currentTarget.value;
        //validation
        setPassword(newPassword);
    }

    const changeFirstName = (e) => {
        let newFirstName = e.currentTarget.value;
        //validation
        setFirstName(newFirstName);
    }

    const changeLastName = (e) => {
        let newLastName = e.currentTarget.value;
        //validation
        setLastName(newLastName);
    }

    const changeEmail = (e) => {
        let newEmail= e.currentTarget.value;
        //validation
        setEmail(newEmail);
    }

    const submit = async () => {
        let result = await API.registration(username, password, firstname, lastname, email);
        if (result.statusText == 'Created') {
            props.getUser();
        }
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center">Регистрация</h3>
                <hr/>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'100px'}} className="input-group-text">User Name</span>
                    </div>
                    <div>
                        <input class="form-control"
                               type="text" onChange={changeUserName}
                               placeholder={"User Name"} value={username}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'100px'}} className="input-group-text">Password</span>
                    </div>
                    <div>
                        <input class="form-control"
                               type="password" onChange={changePassword}
                               placeholder={"Password"} value={password}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'100px'}} className="input-group-text">First Name</span>
                    </div>
                    <div>
                        <input class="form-control"
                               type="text" onChange={changeFirstName}
                               placeholder={"First Name"} value={firstname}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'100px'}} className="input-group-text">Last Name</span>
                    </div>
                    <div>
                        <input class="form-control"
                               type="text" onChange={changeLastName}
                               placeholder={"Last Name"} value={lastname}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'100px'}} className=" input-group-text">Email</span>
                    </div>
                    <div>
                        <input class="form-control"
                               type="email" onChange={changeEmail}
                               placeholder={"Email"} value={email}/>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={submit}>Войти</button>
            </div>
        </div>
    );
}