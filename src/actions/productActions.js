import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR
} from '../types'

import axios from '../config/axios'

// Create new products
export function actionCreateNewProduct(product) {
	return async dispatch => {
		dispatch(addNewProduct());
		try {
			await axios.post('/hi', product);
			dispatch(addProductSucceed(product));
		} catch (error) {
			dispatch(addProductFailed(true));
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
