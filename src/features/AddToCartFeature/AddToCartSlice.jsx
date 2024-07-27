import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	numberOfItems: 0,
	items: [],
};

const addToCartSlice = createSlice({
	name: "addToCart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (existingItem) {
				existingItem.quantity += 1; // Increment quantity
			} else {
				state.items.push({
					...action.payload,
					quantity: 1,
				}); // Add new item with quantity 1
			}
			state.numberOfItems++;
		},
		removeItem: (state, action) => {
			const item = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (item) {
				if (item.quantity > 1) {
					item.quantity -= 1; // Decrement quantity if more than 1
				} else {
					state.items = state.items.filter(
						(item) =>
							item.id !==
							action.payload.id
					); // Remove item if quantity is 0
				}
			}
			state.numberOfItems--;
		},
		removeAll: (state, action) => {
			const item = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (item) {
				state.numberOfItems -= item.quantity;
				state.items = state.items.filter(
					(item) => item.id !== action.payload.id
				);
			}
		},
		clearCart: (state) => {
			state.items = [];
			state.numberOfItems = 0;
		}
	},
});

export const selectItems = (state) => state.addToCart.items;
export const selectItem = (state, id) =>
	state.addToCart.items.find((item) => item.id === id);
export const selectTotalNumberOfItems = (state) =>
	state.addToCart.items.reduce((total, item) => total + item.quantity, 0);
export const { addItem, removeItem, removeAll, clearCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
