import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { toast } from 'react-toastify';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    loading: false,
    msg: null,
    error: null,
  },
  reducers: {
    getCartItemsLoading: (state, {payload}) => {
      state.loading = true
    },
    getAllCartItems: (state, {payload}) => {
      state.cartItems = payload
      state.loading = false
    },
    getCartItemsFail: (state, {payload}) => {
      state.loading = false
      state.error = true
    },


    deleteFromCartLoading: (state, {payload}) => {
      state.loading = true
    },
    deleteFromCart: (state, {payload}) => {
      state.cartItems = state.cartItems.filter(item => item.id !== payload)
      state.loading = false
    },
    deleteAllItemsCart: (state, {payload}) => {
      state.cartItems = []
      state.loading = false
    },
    deleteFromCartFail: (state, action) => {
        state.error = true
    },   

    addToCart: (state, {payload}) => {
      state.msg = payload.msg
    },
    addToCartFail: (state, action) => {
        state.success = false
    }   
  },
});

export const {addToCart, addToCartFail, getCartItemsFail, getCartItemsLoading, getAllCartItems, deleteAllItemsCart, deleteFromCart, deleteFromCartLoading, deleteFromCartFail} = cartSlice.actions;
export default cartSlice.reducer;

export function addCartItems(id, qty) {
  return async dispatch => {
    try {
        const body = {
            "productId": id,
            "quantity": qty
        }
        const res =  await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/Cart`, body, {headers: {'Content-Type': 'application/json'}})
        toast.success(res.data.msg);
        dispatch(addToCart(res.data));
    } catch (error) {
      console.log(error)
      dispatch(addToCartFail())
    }
  }
}

export function getCartItems() {
  return async dispatch => {
    try {
        dispatch(getCartItemsLoading())
        const res =  await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/Cart`, {headers: {'Content-Type': 'application/json'}})        
        dispatch(getAllCartItems(res.data))
    } catch (error) {
      console.log(error)
      dispatch(getCartItemsFail())
    }
  }
}

export function deleteCartItem(id) {
  return async dispatch => {
    try {
        dispatch(deleteFromCartLoading())
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/Cart`, {id}, {headers: {'Content-Type': 'application/json'}})
        dispatch(deleteFromCart(id))
    } catch (error) {
      console.log(error)
      dispatch(deleteFromCartFail())
    }
  }
}

