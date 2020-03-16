import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
	root: {
                margin: '5px',
		padding: '5px',
                border: '1px',
                borderStyle: 'solid',
                borderColor: 'turquoise',
	}
}

const ProductCategoryRow = props => {

        const { classes,  category} = props
        
        return (
                <tr>
                        <th colSpan="2">
                                {category}
                        </th>
                </tr>
        )
}

export default withStyles(styles)(ProductCategoryRow)
