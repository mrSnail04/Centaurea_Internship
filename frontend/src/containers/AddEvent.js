import React, {useState} from 'react';
import {API} from "../api/api";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AddEventPage = () => {
    return (<>
        <div>
            <Link to={'/classical-concert'}>
                <span>
                    Добавить классический концерт
                </span>
            </Link>
        </div>
        <div>
            <Link style={{textDecoration: 'none'}} to={'/party'}>
                <span className="nav-link">
                    Добавить пати
                </span>
            </Link>
        </div>
        <div>
            <Link style={{textDecoration: 'none'}} to={'/open-air'}>
                <span className="nav-link">
                    Добавить ОпенАир
                </span>
            </Link>
        </div>
        <div>
            <Link style={{textDecoration: 'none'}} to={'/other-event'}>
                <span className="badge badge-primary">
                    Добавить другое мероприятие
                </span>
            </Link>
        </div>
    </>);
}