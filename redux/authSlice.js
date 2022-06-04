import { createSlice } from "@reduxjs/toolkit";
import {axiosWrapper} from '../utils/axiosWrapper'

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    name: null,
    userId: null,
    name: null,
    userName: null,
    email: null,
    role: null,
    loading: false
  },
  reducers: {
    authUser: (state, {payload}) => {
      state.authenticated = payload.authenticated
      state.email = payload.email;
      state.userId = payload.id;
      state.userName = payload.userName;
      state.role = payload.role;
      state.name = payload.name;
      state.image = payload.image;
    },
  },
});

export function checkAuth(){
  return async dispatch => {
    const res = await axiosWrapper('/Auth', 'get')
    if(res.data){
      dispatch(authUser(res.data))
    }
  }
}

export const { authUser} = authSlice.actions;
export default authSlice.reducer;

