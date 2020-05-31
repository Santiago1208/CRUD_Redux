import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { actionGetProducts } from '../actions/productActions'

const Products = () => {

	const dispatch = useDispatch();
	const products = useSelector(state => state.products.products)

	useEffect(() => {
		const getProducts = () => dispatch(actionGetProducts());
		getProducts()
	}, [])

	return (
		<Fragment>
			<h2 className="text-center my-5">Products List</h2>
			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => {
						return (
							<tr key={index}>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td className="acciones">
									<Link to={`/products/edit/${product.id}`} className="btn btn-primary mr-2">Edit</Link>
									<button className="btn btn-danger">Delete</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</Fragment>
	);
}
 
export default Products;
