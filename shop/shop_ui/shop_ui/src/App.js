import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import {Layout} from "./hocs/Layout";
import {Home} from "./containers/Home";
import {Login} from "./containers/Login";
import {Signup} from "./containers/SignUp";
import {ResetPassword} from './containers/ResetPassword'
import {API} from "./api/api";
import {Navbar} from "./components/Navigation/Navbar";


const baseUrl = "/react";
const home = baseUrl + "/";
const login = baseUrl + "/login";

export const App = () => {

    const [userName, setUser] = useState("");

    useEffect(async () => {
        let user = await API.me(); // {name: ""}
        if (user?.name) {
            setUser(user.name)
        }
    }, []);


    return (
        <Router>
            <Layout userName={userName}>
                <Switch>
                    <Route exact path={home} component={Home}/>
                    <Route exact path={login}>
                        {userName ? <Redirect to={home}/> : () => <Login/>}
                    </Route>
                    {/*<Route exact path='/react/login' component={() => <Login userName={userName}/>}/>*/}
                    <Route exact path='/signup' component={Signup}/>
                    <Route exact path='/reset_password' component={ResetPassword}/>
                </Switch>
            </Layout>
        </Router>
    );
}

