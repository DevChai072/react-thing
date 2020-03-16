import React, { Fragment } from 'react';
import logo from './logo.svg';
import { withStyles } from '@material-ui/core/styles';
import FilterableProductTable from './Components/FilterableProductTable'

const styles = {
	root: {
		display: 'grid',
		width: '100%',
		paddingTop: '20px',
		textAlign: 'center',
		justifyItems: 'center',
	}
}

const App = (props) => {

	const { classes } = props

	return (
		<div className={classes.root}>
			
			<FilterableProductTable  className={classes.filterProductTable} />

		</div>
	)
}

export default withStyles(styles)(App);
