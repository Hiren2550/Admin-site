import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  editProduct,
  fetchAllBrands,
  fetchAllCategories,
  fetchAllProducts,
  fetchAllProductsByFilter,
  fetchProductById,
} from "./productAPI.js";

const initialState = {
  products: [],
  categories: [],
  brands: [],
  product: {},
  error: null,
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    //console.log(response.data);
    return response.data;
  }
);
export const fetchAllBrandsAsync = createAsyncThunk(
  "product/fetchAllBrands",
  async () => {
    const response = await fetchAllBrands();
    return response.data;
  }
);
export const fetchAllCategoriesAsync = createAsyncThunk(
  "product/fetchAllCategories",
  async () => {
    const response = await fetchAllCategories();
    return response.data;
  }
);
export const fetchAllProductsByFilterAsync = createAsyncThunk(
  "product/fetchAllProductsByFilter",
  async ({ filter, sort, pagination }) => {
    const response = await fetchAllProductsByFilter(filter, sort, pagination);
    return response.data;
  }
);
export const deleteProductAsync = createAsyncThunk(
  "product/deleteProduct",
  async (productId) => {
    const response = await deleteProduct(productId);
    // console.log(response.data);
    return response.data.id;
  }
);
export const addProductAsync = createAsyncThunk(
  "product/addProduct",
  async (productData) => {
    const response = await addProduct(productData);
    // console.log(response.data);
    return response.data;
  }
);
export const editProductAsync = createAsyncThunk(
  "product/editProduct",
  async (productData) => {
    const response = await editProduct(productData);
    // console.log(response.data);
    return response.data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      })
      .addCase(fetchAllCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.product = action.payload;
      })
      .addCase(deleteProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.products.findIndex(
          (product) => product.id === action.payload
        );
        state.products.splice(index, 1);
      })
      .addCase(addProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products.push(action.payload);
        state.error = null;
      })
      .addCase(addProductAsync.rejected, (state) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(editProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.products.splice(index, 1, action.payload);
        state.error = null;
      })
      .addCase(editProductAsync.rejected, (state) => {
        state.status = "idle";
        state.error = action.error;
      });
  },
});

export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
export const selectProduct = (state) => state.product.product;
export default productSlice.reducer;
