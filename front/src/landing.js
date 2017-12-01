import React, { Component } from 'react';
import Button from 'material-ui/Button';


export class Landing extends Component {
    render() {
        return (
            <div className="vertical_center">
                <Button> Utilisateurs </Button>
                <Button> Cartes </Button>
                <Button> Données </Button>
            </div>
        )
    }
}