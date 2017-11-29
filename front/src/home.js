import React from 'react';

import { Login }  from './login';
import { Header } from './header';

export const Home = (data) => {
    if (data.logged) {
        return (
            <div>
                You are logged in !
            </div>
        );    
    }
    return (
            <Login/>
    );    
};
   
