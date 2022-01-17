import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Layout} from "./hocs/Layout";
import {Home} from "./containers/Home";
import {Login} from "./containers/Login";
import {ResetPassword} from "./containers/ResetPassword";
import {Profile} from "./containers/Profile";
import {API, setCallbackFor401} from "./api/api";
import {Registration} from "./containers/Registration";
import {EventPage} from "./containers/EventPage";


const home = "/";
const login = "/login";
const registration = "/registration";
const reset_password = "/reset-password";
const profile = "/profile";
const admin = "/admin";


export const App = () => {

    const [user, setUser] = useState(undefined);
    const [cart, setCart] = useState(undefined);
    const [events, setEvents] = useState(undefined);
    const [useradmin, setUserAdmin] = useState(undefined);

    const getUser = async () => {
        let user = await API.me();
        if (user?.id) {
            setUser(user);
            let user_admin = await API.user_is_admin(user.id);
            if (user_admin?.id) {
                setUserAdmin(user_admin);
            } else {
                setUserAdmin(null);
            }
        } else {
            setUser(null);
            setUserAdmin(null);
        }
    }

    const getEvent = async () => {
        let events = await API.events();
        if (events && events.status === 200) {
            setEvents(events.data);
        } else {
            setEvents(null);
        }
    }

    const getCart = async () => {
        let cart = await API.cartUser();
        if (cart?.id) {
            setCart(cart)
        } else {
            setCart(null);
        }
    }
    useEffect(() => {
        function fetchData() {
            getUser();
            getCart();
            getEvent();
        }
        if (localStorage.getItem("auth_token")) {
            fetchData();
        } else {
            console.log(setUser);
            setUser(null);
            console.log(setUser);
        }
    }, []);

    const notauthorized = () => {
        setUser(null);
    }
    setCallbackFor401(notauthorized);


    if (user === undefined) {
        return <div
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            Loading...
        </div>
    }

    return (
        <Router>
            <Layout user={user} useradmin={useradmin} notauthorized={notauthorized}>
                <Switch>
                    <Route exact path={home}
                           component={!user?.id ? () => <Redirect to={login}/> : () => <Home events={events}/>}/>
                    <Route exact path={login}
                           component={user?.id ? () => <Redirect to={home}/> : () => <Login
                               getUser={getUser}
                               getEvent={getEvent}
                               getCart={getCart}
                           />}/>
                    <Route exact path={registration}
                           component={user?.id ? () => <Redirect to={home}/> : () => <Registration
                               getUser={getUser}/>}/>
                    <Route exact path={reset_password}
                           component={!user?.id ? () => <Redirect to={login}/> : () => <ResetPassword/>}/>
                    <Route exact path={profile}
                           component={!user?.id ? () => <Redirect to={login}/> : () =>
                               <Profile getCart={getCart} user={user} cart={cart}/>}/>
                    <Route path="/event/:slug"><EventPage events={events} getCart={getCart}/></Route>
                    <Route path={admin}
                           component={!useradmin?.is_staff? () => <Redirect to={home}/> : () => {
                               window.location.href = 'https://ancient-oasis-20487.herokuapp.com/admin';
                               return null;
                           }}/>
                    <Route path={"*"} component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
    );
}


export const NotFound = () => {
    return <div>404</div>
}
