import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export class Landing extends Component {
    render() {
        return (
            <div>
                <Paper>
                    <Menu>
                        <MenuItem primaryText="Refresh" onClick = {() => console.log('hello')}/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
                    </Menu>
                </Paper>
            </div>
        )
    }
}