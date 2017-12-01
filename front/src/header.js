import logo from './logo.svg';
import React from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import PowerSettingsNewIcon from 'material-ui-icons/PowerSettingsNew';

const styleButton = {
}

export const Header = () => (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
            <p className="App-title">Company name or something</p>
            <IconButton style={styleButton} color="primary" aria-label="Settings">
                <PowerSettingsNewIcon />  
            </IconButton> 
        </header>
    </div>           
);
   
