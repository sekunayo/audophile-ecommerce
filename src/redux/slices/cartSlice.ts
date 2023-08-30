import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartStateProps {
  value: Array<any>;
  total: number;
  grandTotal: number;
  shipping: number;
  vat: number;
}

const initialState: CartStateProps = {
  value: [],
  total: 0,
  grandTotal: 0,
  shipping: 50,
  vat: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const isElementInArray = (element: any) =>
        element.id === action.payload.id;
      if (state.value.some(isElementInArray)) {
        state.value = [...state.value];
      } else {
        if (!action.payload.quantity) {
          action.payload.quantity = 0;
          state.value = [
            ...state.value,
            { ...action.payload, quantity: action.payload.quantity + 1 },
          ];
        } else {
          state.value = [
            ...state.value,
            { ...action.payload, quantity: action.payload.quantity + 1 },
          ];
        }
      }
    },

    increaseQuantity: (state, action: PayloadAction<any>) => {
      const filteredArray = state.value.filter(
        (element) => element.id !== action.payload.id
      );
      if (!action.payload.quantity) {
        action.payload.quantity = 0;
        state.value = [
          ...filteredArray,
          { ...action.payload, quantity: action.payload.quantity + 1 },
        ];
      } else {
        state.value = [
          ...filteredArray,
          { ...action.payload, quantity: action.payload.quantity + 1 },
        ];
      }
    },

    decreaseQuantity: (state, action: PayloadAction<any>) => {
      const filteredArray = state.value.filter(
        (element) => element.id !== action.payload.id
      );
      state.value = [
        ...filteredArray,
        { ...action.payload, quantity: action.payload.quantity - 1 },
      ];
      if (action.payload.quantity <= 0) {
        state.value = [...filteredArray];
      }
    },

    removeAllFromCart: (state) => {
      state.value = [];
    },

    // removeFromCart: (state: any, { payload }: any) => {
    //   const newCart = state.value.filter(
    //     (element: any) => element.id !== payload.id
    //   );
    //   state.value = newCart;
    // },
    calculateTotal: (state) => {
      const arrayOfPrices = state.value.map(
        (element: any) => parseFloat(element.price) * parseInt(element.quantity)
      );
      state.total = arrayOfPrices.reduce((acc: any, cum: any) => acc + cum, 0);
    },
    calculateGrandTotal: (state) => {
      const vat = 0.05 * state.total;
      state.vat = parseFloat(vat.toFixed(2));
      const grandTotal = state.vat + state.shipping + state.total;
      state.grandTotal = grandTotal;
    },
  },
});

export const {
  addToCart,
  removeAllFromCart,
  calculateGrandTotal,
  increaseQuantity,
  calculateTotal,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
