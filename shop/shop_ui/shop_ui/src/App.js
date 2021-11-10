import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import {Layout} from "./hocs/Layout";
import {Home} from "./containers/Home";
import {Login} from "./containers/Login";
import {ResetPassword} from './containers/ResetPassword'
import {Profile} from './containers/Profile'
import {API, setCallbackFor401} from "./api/api";
import {Logout} from "./containers/Logout";
import {Registration} from "./containers/Registration";


const home = "/";
const login = "/login";
const logout = "/logout";
const registration = "/registration";
const reset_password = "/reset-password";
const profile = "/profile";


export const App = () => {

    const [user, setUser] = useState(null);
    const [cart, setCart] = useState(null);

    const getUser = async () => {
        let user = await API.me();
        if (user?.id) {
            setUser(user)
        }
    }

    const getCart = async () => {
        let cart = await API.cartuser();
        if (cart?.id) {
            setCart(cart)
        }
    }
    useEffect(async () => {
        if (localStorage.getItem("auth_token")) {
            getUser();
            getCart();
        }
    }, []);

    const notauthorized = () => {
        setUser(null);
    }
    setCallbackFor401(notauthorized);

    return (
        <Router>
            <Layout user={user} notauthorized={notauthorized}>
                <Switch>
                    <Route exact path={home}
                           component={Home}/>
                    <Route exact path={login}
                           component={user?.id ? () => <Redirect to={home}/> : () => <Login getUser={getUser} />}/>
                    <Route exact path={logout}
                           component={!user?.id ? () => <Redirect to={login}/> : Logout}/>
                    <Route exact path={registration}
                           component={user?.id ? () => <Redirect to={home}/> : () => <Registration getUser={getUser} />}/>
                    <Route exact path={reset_password}
                           component={!user?.id ? () => <Redirect to={login}/> : () => <ResetPassword/>}/>
                    <Route exact path={profile}
                           component={!user?.id ? () => <Redirect to={login}/> : () => <Profile user={user} cart={cart} />}/>
                    <Route path={"*"} component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
    );
}


const NotFound = () => {
    return <div>404</div>
}
