import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import { connect } from 'react-redux';

const styles = theme => ({
	card: {
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		marginBottom: 16,
		fontSize: 14,
		color: theme.palette.text.secondary,
	},
	pos: {
		marginBottom: 12,
		color: theme.palette.text.secondary,
	},
});

class SimpleCard extends React.Component {
	constructor(props){
		super(props)
	}
	render() {

		const { classes } = this.props;
		const bull = <span className={classes.bullet}>•</span>;
			let test = [];

			for (let i = 0; i <= 15; i++){
			test.push(
			<Grid item xs={12} lg={3}>
				<Card className={classes.card}>
					<CardContent>
					<Typography className={classes.title}>Word of the Day</Typography>
					<Typography variant="headline" component="h2">
						be{bull}nev{bull}o{bull}lent
					</Typography>
					<Typography className={classes.pos}>adjective</Typography>
					<Typography component="p">
						well meaning and kindly.<br />
						{'"a benevolent smile"'}
					</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Learn More</Button>
					</CardActions>
		 		</Card>
		 	</Grid>)
		}

		const testComp = [...Array(10)].map((a,b) => {
		return	(
			<Grid key={b} item xs={12} lg={3}>
				<Card className={classes.card}>
					<CardContent>
					<Typography className={classes.title}>Word of the Day</Typography>
					<Typography variant="headline" component="h2">
						be{bull}nev{bull}o{bull}lent
					</Typography>
					<Typography className={classes.pos}>adjective</Typography>
					<Typography component="p">
							well meaning and kindly.<br />
							{'"a benevolent smile"'}
					</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Learn More</Button>
					</CardActions>
					</Card>
			</Grid>
		)
		});


		return (
			<div>
		<Grid container spacing={24}>
			{testComp}
		</Grid>
	</div>
	);
}
}

const mapStateToProps = state => {
	return state
}

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(SimpleCard));
