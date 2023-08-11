import { configureStore } from "@reduxjs/toolkit";
import shop from "./features/products";
import cart from "./features/cart";

export const store = configureStore({
  reducer: {
    shop,
    cart,
  },
});
