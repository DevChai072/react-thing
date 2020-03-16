import React from 'react'
import { withStyles, } from '@material-ui/core'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const styles = {
        root: {
                padding: '10px',
                border: '1px solid green',
                textAlign: 'left',
        }
}

const ProductTable = props => {

        const {
                classes,
                dataSource,
                filterText,
                inStockOnly
        } = props

        const rowData = []
        let lastCategory = null

        dataSource.forEach(product => {

                if (product.name.indexOf(filterText) === -1) {
                        return;
                }

                if (inStockOnly && !product.stocked) {
                        return;
                }

                if (product.category !== lastCategory) {
                        rowData.push(
                                <ProductCategoryRow
                                        key={product.category}
                                        category={product.category}
                                />
                        )
                }
                
                rowData.push(
                        <ProductRow
                                key={product.name}
                                product={product}
                        />
                )

                lastCategory = product.category

        });

        return (
                <div className={classes.root}>
                        <table>
                                <thead>
                                        <tr>
                                                <th>Name</th>
                                                <th>Price</th>
                                        </tr>
                                </thead>
                                <tbody>{rowData}</tbody>
                        </table>
                </div>
        )
}

export default withStyles(styles)(ProductTable)
