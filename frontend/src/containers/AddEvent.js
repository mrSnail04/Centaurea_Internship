import React, {useState} from 'react';
import {API} from "../api/api";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AddEventPage = () => {
    return (<>
        <div>
            <Link className="badge badge-primary" to={'/classical-concert'}>
                <span className="badge badge-primary">
                    Добавить классический концерт
                </span>
            </Link>
        </div>
        <div>
            <Link className="badge badge-primary" to={'/party'}>
                <span className="badge badge-primary">
                    Добавить пати
                </span>
            </Link>
        </div>
        <div>
            <Link className="badge badge-primary" to={'/open-air'}>
                <span className="badge badge-primary">
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