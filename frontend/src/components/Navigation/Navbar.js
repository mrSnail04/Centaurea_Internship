import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {API} from "../../api/api";

export const Navbar = (props) => {
    return (
        <div className='App'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{textDecoration: 'none'}} to={'/'}>
                                <span className="nav-link">
                                    My TicketShop
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {!props.user? <AuthLink/> : <Logout user={props.user} useradmin={props.useradmin}/>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

const submit = async () => {
    let result = await API.logout();
    return result;
}
///
const sub = async () => {
    let result = await API.adminPage();
    return result;
}
//
const AuthLink = () => (<>
    <li className="nav-item">
        <Link style={{textDecoration: 'none'}} to={'/login'}>
            <span className="nav-link">
                Авторизация
            </span>
        </Link>
    </li>
    <li className="nav-item">
        <Link style={{textDecoration: 'none'}} to={'/registration'}>
            <span className="nav-link">
                Регистрация
            </span>
        </Link>
    </li>
</>)

const Logout = (props) => (<>
    <li className="nav-item">
        <Link style={{textDecoration: 'none'}} to={'/profile'}>
            <span className="nav-link">
                {props.user.username}
            </span>
        </Link>
    </li>
    {props.useradmin?.is_staff? <AdminLink/> : null}
    <li className="nav-item">
        <button type="button" className="btn btn-light" onClick={submit}>Выход</button>
    </li>
</>)

const AdminLink = () => (<>
    <li className="nav-item">
        <Link style={{textDecoration: 'none'}} to={'/admin'}>
            <span className="nav-link">
                Панель администратора
            </span>
        </Link>
    </li>
    <li className="nav-item">
        <Link style={{textDecoration: 'none'}} to={'/add-event'}>
            <span className="nav-link">
                Добавить мероприятие
            </span>
        </Link>
    </li>
</>)

