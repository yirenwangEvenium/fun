import {
    Route,
    Redirect,
} from 'react-router-dom';
  
<Route render={({ history}) => (
    <IconButton className={classes.menuButton} 
                color="contrast" 
                aria-label="Menu"
                onClick={() => { history.push('/home') }} >
      <HomeIcon />
    </IconButton>        
  )} />
