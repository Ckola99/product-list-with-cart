// src/features/ModalFeature/ModalSlice.test.js
import { openModal, closeModal } from './ModalSlice';
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './ModalSlice';

const createTestStore = (initialState) => {
	return configureStore({
		reducer: {
			modal: modalReducer,
		},
		preloadedState: {
			modal: initialState,
		},
	});
};

describe('modal actions', () => {
	test('openModal action', () => {
		const initialState = { isOpen: false };
		const store = createTestStore(initialState);

		store.dispatch(openModal());

		const state = store.getState().modal;
		expect(state.isOpen).toBe(true);
	});

	test('closeModal action', () => {
		const initialState = { isOpen: true };
		const store = createTestStore(initialState);

		store.dispatch(closeModal());

		const state = store.getState().modal;
		expect(state.isOpen).toBe(false);
	});
});
