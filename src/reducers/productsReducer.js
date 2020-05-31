import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS_START,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR
} from '../types'

// Each reducer has its state

const initialState = {
	products: [],
	error: null,
	loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				loading: true
			}
		case ADD_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				products: [...state.products, action.payload]
			}
		case ADD_PRODUCT_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case GET_PRODUCTS_START:
			return {
				...state,
				loading: true
			}
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				products: [...action.payload]
			}
		case GET_PRODUCTS_ERROR:
			return {
				...state,
				loading: false,
				error: true
			}
		default:
			return state
	}
}
