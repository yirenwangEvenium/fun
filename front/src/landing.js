import React, { Component } from 'react';
import Button from 'material-ui/Button';


export class Landing extends Component {
    render() {
        return (
            <div className="vertical_center">
                <Button raised label="Utilisateurs" onClick={this.handleSubmit} fullWidth={true}/>
                <Button raised label="Cartes" onClick={this.handleSubmit} fullWidth={true}/>
                <Button raised label="Données Brut" onClick={this.handleSubmit} fullWidth={true}/>
            </div>
        )
    }
}