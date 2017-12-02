import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      fakeAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
)

/**
 * How to Use
 * Provide Object with 
 * Component to show if authenticated
 * Other props that should include : 
 * ---> if authentication is OK ? 
 * ---> and props need for the Component
 */