import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ShoppingCarttate {
  loading: boolean;
  error: string | null;
  items: any[];
}

const initialState: ShoppingCarttate = {
  loading: true,
  error: null,
  items: [],
};

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.get("/shoppingCart", {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    });
    return data.shoppingCartItems;
  }
);

export const addShoppingCartItem = createAsyncThunk(
  "shoppingCart/addShoppingCartItem",
  async (parameters: { jwt: string; touristRouteId: string }, thunkAPI) => {
    const { data } = await axios.post(
      `http://123.56.149.216:8080/api/shoppingCart/items`,
      {
        touristRouteId: parameters.touristRouteId,
      },
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);

export const checkout = createAsyncThunk(
  "shoppingCart/checkout",
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.get("/checkout");
    return data;
  }
);

export const clearShoppingCartItem = createAsyncThunk(
  "shoppingCart/clearShoppingCartItem",
  async (parameters: { jwt: string; itemIds: number[] }, thunkAPI) => {
    return await axios.delete(
      `http://123.56.149.216:8080/api/shoppingCart/items/(${parameters.itemIds.join(
        ","
      )})`,
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
  }
);

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShoppingCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getShoppingCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(addShoppingCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addShoppingCartItem.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(addShoppingCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(clearShoppingCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearShoppingCartItem.fulfilled, (state, action) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
      .addCase(clearShoppingCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(checkout.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkout.fulfilled, (state, action) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
      .addCase(checkout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
