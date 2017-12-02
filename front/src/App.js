import React, { Component } from 'react';
import ReactDOM   from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import orange from 'material-ui/colors/orange';

import './css/App.css';

import { Switch, Route } from 'react-router-dom'


import Header from './components/header';
import { Home }  from './components/home';
import { Landing } from './components/landing';
import Users from './components/users';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: orange,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isAuth: false};
  }

  render() {    
    return (
      <MuiThemeProvider theme={theme}>      
        <div className="App">
          <Header isAuth={true}/>
          <Switch>
            <Route exact path='/' render={(props) => ( <Home {...props} isAuth = {this.state.isAuth}/> )}/>
            <Route path='/home' component={Landing}/>
            <Route path='/users' component={Users}/>
            </Switch>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
