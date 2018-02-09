import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Test from './test';
import HomeIcon from 'material-ui-icons/Home';
import IconThing from 'material-ui/Icon';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  list: {
	  color:theme.palette.primary.contrastText,
	  padding: '20px',
	  display:'flex',
	  alignItems:'center'

  },
  list1: {
	backgroundColor:theme.palette.secondary.main,
	padding: '20px'
  },
  appBar: {
    position: 'absolute',
	backgroundColor: '#35485c',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    width: drawerWidth,
	backgroundColor: '#35485c',
	position: 'fixed',
	maxHeight: '100vh',
	height: 'calc(100%)',
	top: '0px',
    left: '0',
    bottom: '0',
	border: 'none'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: '100%',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      marginTop: 64,
    },
  },
  'content-left': {
    marginLeft: 0,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: '240px',
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class PersistentDrawer extends React.Component {
  state = {
    open: true,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <MenuIcon style={{color: 'white'}} />
            </IconButton>
          </div>
          <Divider />
          <List className={classes.list}><IconThing>home</IconThing><span>Home</span></List>
          <Divider />
          <List className={classes.list+ ' ' + classes.list1}><IconThing>home</IconThing>Contacts</List>
		  <List className={classes.list}>Account</List>
		  <Divider />
		  <List className={classes.list}><IconThing>map</IconThing>Maps</List>
		  <Divider />
		  <List className={classes.list}>Dashboard</List>
		  <Divider />
		  <List className={classes.list}>Settings</List>
		  <Divider />
        </div>
      </Drawer>
    );

    return (
		<div className={classes.root}>
          <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <Test />
          </main>
          {drawer}
        </div>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
