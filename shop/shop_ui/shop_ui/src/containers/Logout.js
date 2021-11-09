import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {API} from "../api/api";

export const Logout = () => {
    return API.logout;
}
