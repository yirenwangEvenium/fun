import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { Redirect } from 'react-router'

import './css/Login.css';

const styleButton = {
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
                    <TextField
                        label="Email"
                        placeholder="Email"
                        value={this.state.email} 
                        onChange={ (e) => this.handleChange(e, 'email') }
                    />
                    <br />
                    <TextField
                        label="Mot de Passe"
                        placeholder="Mot de Passe"
                        value={this.state.password} 
                        onChange={ (e) => this.handleChange(e, 'password') }
                    />
                    <br />
                    <Button raised color="primary" style={styleButton} onClick={this.handleSubmit} type="submit"> Login </Button> <br />
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