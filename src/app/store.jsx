import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "../features/AddToCartFeature/AddToCartSlice";
import modalReducer from "../features/ModalFeature/ModalSlice"

const store = configureStore({
	reducer: {
		addToCart: addToCartReducer,
		modal: modalReducer,
	},
});

export default store;
