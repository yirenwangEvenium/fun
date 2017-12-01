import React, { Component } from 'react';
import ReactDOM   from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import orange from 'material-ui/colors/orange';

import './css/App.css';

import { Switch, Route } from 'react-router-dom'


import { Header } from './header';
import { Home }  from './home';
import { Landing } from './landing';


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
          <Header/>
          <Switch>
            <Route exact path='/' render={(props) => ( <Home {...props} isAuth = {this.state.isAuth}/> )}/>
            <Route path='/home' component={Landing}/>
          </Switch>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
