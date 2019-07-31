import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props)
    this.addLoginHandler = this.addLoginHandler.bind(this)
  }


  addLoginHandler() {
    this.props.toggle()
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit" onClick={this.addLoginHandler}>
              {this.props.isLogged ? 'LogOut' : 'LogIn'}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}