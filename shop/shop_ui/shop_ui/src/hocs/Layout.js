import React, {useEffect, useState} from 'react';
import {Navbar} from '../components/Navigation/Navbar';


export const Layout = (props) => {

    return (
        <div>
            <Navbar userName={props.userName}/>
            {props.children}
        </div>
    );
}
