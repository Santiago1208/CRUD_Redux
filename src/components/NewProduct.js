import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// Redux actions
import { actionCreateNewProduct } from '../actions/productActions'

const NewProduct = ({history}) => {
	// Declaring local state
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);

	const dispatch = useDispatch();

	// Accessing the global state
	const loading = useSelector(state => state.products.loading)
	const error = useSelector(state => state.products.error)
	
	const submitNewProduct = event => {
		event.preventDefault();
		// Validate form
		if (name.trim() === '' || price <= 0) {
			// Show an error
			return;
		}

		// Create new product
		addProduct({
			name,
			price
		})

		history.push('/')
	}

	const addProduct = product => dispatch(actionCreateNewProduct(product))

	return (
		<div className="row justify-content-center">
			<div className="col-md-8 ">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">Add New Product</h2>
						<form onSubmit={ submitNewProduct }>
							<div className="form-group">
								<label>Product Name</label>
								<input type="text" className="form-control" placeholder="Product Name" name="name" value={ name } 
									onChange={e => setName(e.target.value)}></input>
							</div>
							<div className="form-group">
								<label>Product Price</label>
								<input type="number" className="form-control" placeholder="Product Price" name="price" value={ price }
									onChange={ e => setPrice(Number(e.target.value)) }></input>
							</div>
							<button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Add</button>
						</form>
						{ loading === true ? <p>Loading...</p> :  null }
						{ error === true ? <p className="alert alert-danger p2 mt-4 text-center">There was an error</p> : null }
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default NewProduct;
