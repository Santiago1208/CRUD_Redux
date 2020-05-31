import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR
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
			Swal.fire('Failed', 'An error occurred while creating the product', 'error');
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
