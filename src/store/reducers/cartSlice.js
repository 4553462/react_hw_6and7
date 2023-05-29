import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCart } from "../actions/cartCreator";

const initialState = {
  isOpen: false,
  totalPrice: 0,
  items: [],
  itemsIsError: "",
  itemsIsLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setisOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    addItem: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.items.find((obj) => obj.id === id);
      if (existingItem) {
        existingItem.count += 1;
        existingItem.total += price;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    minusItem: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.items.find((obj) => obj.id === id);
      if (existingItem && existingItem.count > 0) {
        existingItem.count -= 1;
        existingItem.total -= price;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCart.pending, (state, action) => {
      state.itemsIsLoading = true;
      state.itemsIsError = "";
      state.items = [];
    });

    builder.addCase(fetchAllCart.fulfilled, (state, action) => {
      state.itemsIsLoading = false;
      state.itemsIsError = "";
      state.items = action.payload;
    });

    builder.addCase(fetchAllCart.rejected, (state, action) => {
      state.itemsIsLoading = true;
      state.itemsIsError = action.payload;
      state.items = [];
    });
  },
});

const cartReducer = cartSlice.reducer;

export const {
  setisOpen,
  addItem,
  removeItem,
  minusItem,
} = cartSlice.actions;

export default cartReducer;
