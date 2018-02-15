import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import IconThing from 'material-ui/Icon';
import {Link, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

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
		alignItems:'center',
		textDecoration: 'none'

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
	constructor(props){
		super(props)
	}
	render() {
	const { classes, theme } = this.props;

	const drawer = (
		<Drawer
			variant="persistent"
			classes={{
				paper: classes.drawerPaper,
			}}
			anchor='left'
			open={this.props.open.open}
			>
			<div className={classes.drawerInner}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={() => this.props.toggleChange(!this.props.open.open)}>
						<MenuIcon style={{color: 'white'}} />
					</IconButton>
				</div>
				<Divider />
				<List><Switch><Link className={classes.list} to="/"><IconThing>home</IconThing> Home</Link></Switch></List>
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
				<List><Switch><Link className={classes.list} to="/test">Test</Link></Switch></List>
				<Divider />
			</div>
		</Drawer>
	);


	return (
		<div>
			<div>
				<AppBar className={classes.appBar}>
					<Toolbar disableGutters={false}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={() => this.props.toggleChange(!this.props.open.open)}
							className={classes.menuButton}
							>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				{drawer}
			</div>
		</div>
	);
}
}

const mapStateToProps = state => {
	return state
};

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(PersistentDrawer));
