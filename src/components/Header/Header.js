import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styled'
import { goToMusicList, goToLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    const history = useHistory()
  return (
      <AppBar position="static">
        <StyledToolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Button onClick={() => goToMusicList(history)} color="inherit">Music</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header