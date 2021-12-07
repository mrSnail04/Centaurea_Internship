import React, {useState} from 'react';
import {API} from "../api/api";
import {Link} from "react-router-dom";

export const AddEventPage = () => {
    return (<>
        <div>
            <Link style={{textDecoration: 'none'}} to={'/classical-concert'}>
                <span className="nav-link">
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
                <span className="nav-link">
                    Добавить другое мероприятие
                </span>
            </Link>
        </div>
    </>);
}