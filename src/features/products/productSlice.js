import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.list = state.list.filter(p => p.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;