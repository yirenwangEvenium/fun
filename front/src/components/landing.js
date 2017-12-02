import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'


export class Landing extends Component {

    handleClick = (e, opt) => {
        switch (opt) {
            case 'user':
                break;
        
            default:
                break;
        }
    }
    render() {
        return (
            <div className="vertical_center">
                <Link to='/users' className = "full_width" style={{ textDecoration: 'none' }}>
                    <Button className = "full_width" onClick={ (e) => this.handleClick(e, 'user') }> Utilisateurs </Button>
                </Link>
                <Button className = "full_width"> Cartes </Button>
                <Button className = "full_width"> Données </Button>
            </div>
        )
    }
}