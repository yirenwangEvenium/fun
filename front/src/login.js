import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router'

import './css/Login.css';

const style = {
    margin: 12,
  };
  
export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {email: '', password: '', fireRedirect: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, formtype) {
        switch (formtype) {
            case 'email':
                this.setState({email: event.target.value});            
                break;
    
            case 'password':
                this.setState({password: event.target.value});                        
                break;

            default:
                break;
        }
    }
    
    handleSubmit(event) {
        alert('submitted')
        event.preventDefault();
        this.setState({ fireRedirect: true })        
    }

    render(){
        const { from } = '/'
        const { fireRedirect } = this.state
    
        return (
            <div className="Login">
                <form onSubmit = { this.onSubmit }>
                    <TextField hintText="Email" value={this.state.email} onChange={ (e) => this.handleChange(e, 'email') }/><br />
                    <TextField hintText="Mot de Passe" type="password" value={this.state.password} onChange={ (e) => this.handleChange(e, 'password') }/><br />
                    <RaisedButton label="Login" primary={true} style={style} onClick={this.handleSubmit} type="submit"/> <br />
                    <a href="#"> Mot de Passe oublié </a>
                    <a href="#"> Crée mon compte</a>
                </form>
                {fireRedirect && (
                <Redirect to={from || '/home'}/>
                )}
            </div>
        );
    }
}