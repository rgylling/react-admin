import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';



const drawerWidth = 240;
const styles = theme => ({

	content: {
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
	'contentWidth': {
		width: `calc(100% - ${drawerWidth}px)`,
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


class Content extends React.Component {

	render() {
		const { classes, theme } = this.props;
		return (

			<main
				className={classNames(classes.content, classes[`content-${this.props.open}`], {
					[classes.contentShift]: this.props.open,
					[classes[`contentShift-${'left'}`]]: this.props.open,
					[classes.contentWidth]: this.props.open,
				})}
				>
				{this.props.children}
			</main>
		);
	}
}
const mapStateToProps = state => {
	return state
};

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(Content));
