// src/features/AddToCartFeature/AddToCartSlice.test.js
import { addItem, removeItem, removeAll, clearCart } from './AddToCartSlice';
import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from './AddToCartSlice';

// Helper function to create a preconfigured store
const createTestStore = (initialState) => {
  return configureStore({
    reducer: {
      addToCart: addToCartReducer,
    },
    preloadedState: {
      addToCart: initialState,
    },
  });
};

describe('addToCart actions', () => {
  test('addItem action', () => {
    const initialState = {
      numberOfItems: 0,
      items: [],
    };

    const store = createTestStore(initialState);
    const item = { id: 1, name: 'Test Item', price: 10 };

    store.dispatch(addItem(item));

    const state = store.getState().addToCart;
    expect(state.numberOfItems).toBe(1);
    expect(state.items).toEqual([{ ...item, quantity: 1 }]);
  });

  test('removeItem action', () => {
    const initialState = {
      numberOfItems: 1,
      items: [{ id: 1, name: 'Test Item', price: 10, quantity: 2 }],
    };

    const store = createTestStore(initialState);
    store.dispatch(removeItem({ id: 1 }));

    const state = store.getState().addToCart;
    expect(state.numberOfItems).toBe(0);
    expect(state.items).toEqual([{ id: 1, name: 'Test Item', price: 10, quantity: 1 }]);
  });

  test('removeAll action', () => {
    const initialState = {
      numberOfItems: 2,
      items: [{ id: 1, name: 'Test Item', price: 10, quantity: 2 }],
    };

    const store = createTestStore(initialState);
    store.dispatch(removeAll({ id: 1 }));

    const state = store.getState().addToCart;
    expect(state.numberOfItems).toBe(0);
    expect(state.items).toEqual([]);
  });

  test('clearCart action', () => {
    const initialState = {
      numberOfItems: 3,
      items: [
        { id: 1, name: 'Test Item', price: 10, quantity: 2 },
        { id: 2, name: 'Another Item', price: 5, quantity: 1 },
      ],
    };

    const store = createTestStore(initialState);
    store.dispatch(clearCart());

    const state = store.getState().addToCart;
    expect(state.numberOfItems).toBe(0);
    expect(state.items).toEqual([]);
  });
});
