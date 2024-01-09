"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.cart.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
    },
    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.cart = state.cart.filter(item => item.id !== idToRemove);
    },
    increaseQuantity(state, action) {
      const idToIncrement = action.payload;
      const itemToIncrement = state.cart.find(item => item.id === idToIncrement);

      if (itemToIncrement) {
        itemToIncrement.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const idToDecrement = action.payload;
      const itemToDecrement = state.cart.find(item => item.id === idToDecrement);

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity--;
      }
    },
    calculateCartTotal(state) {
      const { totalQuantity, totalPrice } = state.cart.reduce(
        (accumulator, item) => {
          accumulator.totalQuantity += item.quantity;
          accumulator.totalPrice += item.price * item.quantity;
          return accumulator;
        },
        { totalQuantity: 0, totalPrice: 0 }
      );

      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
