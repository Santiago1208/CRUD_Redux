import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS_START,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR
} from '../types'

import axios from '../config/axios'
import Swal from 'sweetalert2'

// Create new products
export function actionCreateNewProduct(product) {
	return async dispatch => {
		dispatch(addNewProduct());
		try {
			await axios.post('/products', product);
			dispatch(addProductSucceed(product));
			Swal.fire('Success', 'The product was created successfully', 'success');
		} catch (error) {
			dispatch(addProductFailed(true));
			Swal.fire('Failed', 'An error occured while creating the product', 'error');
		}
	}
}

const addNewProduct = () => ({
	type: ADD_PRODUCT,
	// This attribute is always used to modify the state.
	// In this case, this action won't modify the state.
	payload: null
})

const addProductSucceed = product => ({
	type: ADD_PRODUCT_SUCCESS,
	// In this case, this action will modify the state.
	payload: product
})

const addProductFailed = isError => ({
	type: ADD_PRODUCT_ERROR,
	payload: isError
})

export function actionGetProducts() {
	return async dispatch => {
		dispatch({type: GET_PRODUCTS_START})
		try {
			const products = await axios.get('/products');
			dispatch({type: GET_PRODUCTS_SUCCESS, payload: products.data});
		} catch (error) {
			dispatch({type: GET_PRODUCTS_ERROR})
			Swal.fire('Error', 'An error occured while fetching the products', 'error');
		}
	}
}
