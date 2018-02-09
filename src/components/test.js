import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'

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

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
		<Grid container spacing={24}>
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
		  </Grid>
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
		</Grid>
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
	  </Grid>
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
	</Grid>
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
  </Grid>
	  </Grid>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
