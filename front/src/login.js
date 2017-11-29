import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './css/Login.css';

const style = {
    margin: 12,
  };
  
export class Login extends Component {
    render(){
        return (
            <div className="Login">
                <TextField hintText="Email" /><br />
                <TextField hintText="Mot de Passe" type="password" /><br />
                <RaisedButton label="Login" primary={true} style={style} /> <br />
                <a href="#"> Mot de Passe oublié </a>
                <a href="#"> Crée mon compte</a>
            </div>
        );
    }
}