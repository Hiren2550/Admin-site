import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createOrder,
  deleteOrder,
  fetchAllOrders,
  fetchOrderById,
  updateOrder,
} from "./orderAPI";

const initialState = {
  orders: [],
  order: null,
  status: "idle",
  currentOrder: null,
};

export const createOrderAsync = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    const response = await createOrder(order);
    // console.log(response.data);
    return response.data;
  }
);

export const fetchAllOrdersAsync = createAsyncThunk(
  "order/fetchAllOrders",
  async () => {
    const response = await fetchAllOrders();
    // console.log(response.data);
    return response.data;
  }
);
export const fetchOrderByIdAsync = createAsyncThunk(
  "order/fetchOrderById",
  async (orderId) => {
    const response = await fetchOrderById(orderId);
    // console.log(response.data);
    return response.data;
  }
);

export const updateOrderAsync = createAsyncThunk(
  "order/updateOrder",
  async (updateData) => {
    const response = await updateOrder(updateData);
    // console.log(response.data);
    return response.data;
  }
);
export const deleteOrderAsync = createAsyncThunk(
  "order/deleteOrder",
  async (orderId) => {
    const response = await deleteOrder(orderId);
    // console.log(response.data);
    return response.data.id;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders.push(action.payload);
        state.currentOrder = action.payload;
      })
      .addCase(fetchAllOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        (state.status = "idle"), (state.orders = action.payload);
      })
      .addCase(fetchOrderByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrderByIdAsync.fulfilled, (state, action) => {
        (state.status = "idle"), (state.order = action.payload);
      })
      .addCase(updateOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.orders.findIndex(
          (order) => order.id === action.payload.id
        );
        state.orders.splice(index, 1, action.payload);
      })
      .addCase(deleteOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.orders.findIndex(
          (order) => order.id === action.payload
        );
        state.orders.splice(index, 1);
      });
  },
});

export const { resetOrder } = orderSlice.actions;
export const selectCurrentOrder = (state) => state.order.currentOrder;
export const selectAllOrders = (state) => state.order.orders;
export const selectOrder = (state) => state.order.order;

export default orderSlice.reducer;
