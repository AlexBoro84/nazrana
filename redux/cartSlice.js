import { createSlice } from "@reduxjs/toolkit";
import {axiosWrapper} from '../utils/axiosWrapper'
import { toast } from 'react-toastify';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    loading: false,
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
      state.loading = false
    },   

    addToCart: (state, {payload}) => {
      const products = []
      state.loading = false
      state.cartItems.map(item => {
        if(item.product.id === payload.id){
          item.quantity = payload.qty
          products.push(item)
        }else{
          products.push(item)
        }  
      })
      state.cartItems = products
    },
    addToCartFail: (state, action) => {
        state.loading = false
    }   
  },
});

export const {addToCart, addToCartFail, getCartItemsFail, getCartItemsLoading, getAllCartItems, deleteAllItemsCart, deleteFromCart, deleteFromCartLoading, deleteFromCartFail} = cartSlice.actions;
export default cartSlice.reducer;

export function addCartItems(id, qty) {
  return async dispatch => {
    dispatch(getCartItemsLoading())
    try {
        const data = {
            "productId": id,
            "quantity": qty
        }
  
      const res = await axiosWrapper('Cart', 'post', data)
      toast.success(res.data.msg);
      dispatch(addToCart({id, qty}));
    } catch (error) {
      dispatch(addToCartFail())
    }
  }
}

export function getCartItems() {
  return async dispatch => {
    try {
        dispatch(getCartItemsLoading())
        const res = await axiosWrapper('Cart', 'get')
        dispatch(getAllCartItems(res.data))
    } catch (error) {
      dispatch(getCartItemsFail())
    }
  }
}

export function deleteCartItem(id) {
  return async dispatch => {
    try {
        dispatch(deleteFromCartLoading())
        const res = await axiosWrapper(`/Cart/Remove/${id}`, 'post', {})
        toast.success(res.data.msg);
        dispatch(deleteFromCart(id))
    } catch (error) {
      dispatch(deleteFromCartFail())
    }
  }
}

