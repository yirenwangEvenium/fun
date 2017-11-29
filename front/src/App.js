import React, { Component } from 'react';
import ReactDOM   from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom'

import './css/App.css';

import { Header } from './header';
import { Home }  from './home';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>      
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' render={(data) => ( <Home data = {data} /> )}/>
            <Route path='/roster' component={Home}/>
          </Switch>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
