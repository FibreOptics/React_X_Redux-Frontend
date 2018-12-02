import React, { Component } from 'react';
import Styles from './TopNavbarCss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Badge,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  MoreIcon,
  NotificationsIcon,
  MailIcon,
  AccountCircle,
  SearchIcon,
  MenuIcon,
  AccountCircleTwoTone,
  Chat,
  SupervisorAccountTwoTone,
  ChevronLeftIcon,
  LockOpen,
} from './IconStore';

class TopNavBar extends Component {
  constructor(){
    super();
    this.state = {
      anchorEl: null,
      left: false,
    };

  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  
  render() {
    const { anchorEl} = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    //console.log(this.props);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('left',true)} className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Dokki
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={1} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={2} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <LockOpen />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} classes={{paperAnchorLeft: classes.paperAnchorLeft}}>
          <div
          className={classes.list}
          tabIndex={0}
          role="button" 
          onClick ={this.toggleDrawer('left', false)}
          onKeyDown={this.toggleDrawer('left', false)}
          >
            <div >
              <List>
                <ListItem button key={'Back'} onClick={this.handleDrawerClose}>
                  <ListItemIcon><ChevronLeftIcon /></ListItemIcon>
                  <ListItemText primary={'Back'} />
                </ListItem>
              </List>  
                <Divider />
              <List>
                {['Profile'].map((text) => (
                    <ListItem button key={text}>
                    <ListItemIcon><AccountCircleTwoTone/></ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
              </List>
                <Divider />
              <List>
                {['Friends', 'Recents'].map((text, index) => (
                    <ListItem ref={text} button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <SupervisorAccountTwoTone/> : <Chat/>}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
              </List>
            </div>
          </div>
        </Drawer>
      </div>
    ); 
  }
}

TopNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(TopNavBar);