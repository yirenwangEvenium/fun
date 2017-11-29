import React from 'react';

import { Login }  from './login';
import { Header } from './header';

export const Home = (props) => {
    if (props.isAuth) {
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
   
