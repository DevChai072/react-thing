import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
	root: {
		padding: '10px',
		border: '1px solid blue',
		textAlign: 'left',
	}
}

const SearchBar = props => {

	const {
		classes,
		filterText,
		inStockOnly,
		onFilterTextChange,
		onInStockChange
	} = props

	const handleFilterTextChange = (e) => {
		onFilterTextChange(e.target.value)
	}

	const handleInStockChange = (e) => {
		onInStockChange(e.target.checked)
	}

	return (
		<div className={classes.root}>
			<form>
				<input type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextChange} />
				<br></br>
				<input type="checkbox" id="vehicle1" name="vehicle1" checked={inStockOnly} onChange={handleInStockChange} />
				<label for="vehicle1"> Only show products in stock</label>
			</form>
		</div>
	)
}

export default withStyles(styles)(SearchBar)
