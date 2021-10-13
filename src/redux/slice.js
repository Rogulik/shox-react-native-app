import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../../assets/dummy-data";

const initialState = {
  basket: [],
  ordersHistory: [],
  products: PRODUCTS,
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      state.basket = [...state.basket, product];
    },
    removeItemFromShoppingCart: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    orderItems: (state, action) => {
      state.ordersHistory = [...state.ordersHistory, action.payload];
    },
    clearBasket: (state) => {
      state.basket = [];
    },
  },
});

export const {
  addItemToBasket,
  removeItemFromShoppingCart,
  orderItems,
  clearBasket,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
