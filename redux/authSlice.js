import { createSlice } from "@reduxjs/toolkit";
import {axiosWrapper} from '../utils/axiosWrapper'

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    name: null,
    loading: false
  },
  reducers: {
    authUser: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export function checkAuth(){
  return async dispatch => {
    const res = await axiosWrapper('Auth', 'get')
  }

}

export const { addProduct, reset } = authSlice.actions;
export default authSlice.reducer;

