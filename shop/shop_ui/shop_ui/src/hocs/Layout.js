import React from 'react';
import {Navbar} from '../components/Navigation/Navbar';


export const Layout = (props) => {
    return (
        <div>
            <Navbar user={props.user || null} notauthorized={props.notauthorized}/>
            {props.children}
        </div>
    );
}
