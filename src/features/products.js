import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: undefined,
};

export const shop = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    ["cart/createCartItem"]: (state, action) => {
      state.items.find((el) => el.id === action.payload.id).picked = true;
    },
    ["cart/deleteFromCart"]: (state, action) => {
      state.items.find((el) => el.id === action.payload).picked = false;
    }
  },
});

export function getProductList(action) {
  return function (dispatch, getState) {
    fetch("/data/inventory.json")
      .then((response) => response.json())
      .then((data) => dispatch(addProducts(data.products)));
  };
}

export const { addProducts } = shop.actions;
export default shop.reducer;
