import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';

import {
  Route,
  Redirect,
} from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
      flex: 2
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 'auto',
  },
});

function Header(props) {
  const { classes, isAuth } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Route render={({ history}) => (
            <IconButton className={classes.menuButton} 
                        color="contrast" 
                        aria-label="Menu"
                        onClick={() => { history.push('/home') }} >
              <HomeIcon />
            </IconButton>        
          )} />

          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          {isAuth ? <Button color="contrast">Logout</Button> : <Button color="contrast">Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);


