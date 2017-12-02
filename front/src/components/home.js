import React from 'react';

import { Login }  from './login';

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
   
