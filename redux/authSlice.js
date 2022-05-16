import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const cartSlice = createSlice({
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

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;

export const checkAuth = () => async dispatch => {
  // dispatch(usersLoading());
  const res =  await axios.get(`http://api.thenazrana.in/verify`,  {headers: {'Content-Type': 'application/json'}})

  console.log(res.data)
  // dispatch(usersReceived(response.data));

}