import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const styles = {
	root: {
		width: '25%',
		padding: '10px',
		border: '1px solid orange',
		display: 'grid',
		gridRowGap: '5px',
	}
}

const FilterableProductTable = props => {

	const { classes } = props

	const [state, setState] = useState({
		filterText: '',
		inStockOnly: false
	})

	const handleFilterTextChange = (filterText) => {
		setState(prevState => ({
			...prevState,
			filterText: filterText
		}));
	}

	const handleInStockChange = (inStockOnly) => {
		setState(prevState => ({
			...prevState,
			inStockOnly: inStockOnly
		}));
	}


const PRODUCTS = [
	{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
	{ category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
	{ category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
	{ category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
	{ category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
	{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

return (
	<div className={classes.root}>
		<SearchBar
			filterText={state.filterText}
			inStockOnly={state.inStockOnly}
			onFilterTextChange={handleFilterTextChange}
          		onInStockChange={handleInStockChange}
		/>
		<ProductTable 
			dataSource={PRODUCTS}
			filterText={state.filterText}
			inStockOnly={state.inStockOnly}
		/>
	</div>
)
}

export default withStyles(styles)(FilterableProductTable)
