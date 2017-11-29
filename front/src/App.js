import React, { Component } from 'react';
import ReactDOM   from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom'

import './css/App.css';

import { Header } from './header';
import { Home }  from './home';
import { Landing } from './landing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isAuth: false};
  }

  render() {    
    return (
      <MuiThemeProvider>      
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
