import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR
} from '../types'

// Create new products
export function actionCreateNewProduct(product) {
	return (dispatch) => {
		dispatch(addNewProduct());
		try {
			dispatch(addProductSucceed(product));
		} catch (error) {
			dispatch(addProductFailed(product));
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

const addProductFailed = product => ({
	type: ADD_PRODUCT_ERROR,
})
