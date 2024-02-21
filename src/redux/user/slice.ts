import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
};

export const signIn = createAsyncThunk(
  "user/signIn",
  async (
    parameters: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    // fake sigin
    // const { data } = await axios.post(`http://123.56.149.216:8080/auth/login`, {
    //   email: parameters.email,
    //   password: parameters.password,
    // });
    const { data } = await axios.get("sigin");
    console.log(data);
    return data.token;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })

      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
