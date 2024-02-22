import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { checkout } from "../shoppingCart/slice";

interface OrderState {
  loading: boolean;
  error: string | null;
  currentOrder: any;
}

const initialState: OrderState = {
  loading: false,
  error: null,
  currentOrder: null,
};

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (parameters: { jwt: string; orderId: string }, thunkAPI) => {
    const { data } = await axios.post(
      `http://123.56.149.216:8080/api/orders/${parameters.orderId}/placeOrder`,
      null,
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
    return data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.currentOrder = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(checkout.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkout.fulfilled, (state, action) => {
        state.currentOrder = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(checkout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
