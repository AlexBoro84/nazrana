import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    total: 0,
    nextPage: 0, 
    hasMore: false,
    loading: false,
    error: null,
  },
  reducers: {
    addProductsLoading: (state, action) => {
        state.loading = true
    },
    addProducts: (state, {payload}) => {
      state.products = payload.items
      state.total = payload.total
      state.nextPage = payload.nextPage,
      state.hasMore = payload.hasMore
      state.loading = false
    },
    loadMoreProducts: (state, {payload}) => {
      state.products.push(...payload.items)
      state.total = payload.total
      state.nextPage = payload.nextPage,
      state.hasMore = payload.hasMore
      state.loading = false
    },    
    addProductsFail: (state, action) => {
        state.products = [],
        state.total = 0,
        state.nextPage = 0,
        state.hasMore = false,
        state.loading = false,
        state.error = null
    }   
  },
});

export const {addProductsLoading, addProducts, addProductsFail, loadMoreProducts} = productsSlice.actions;
export default productsSlice.reducer;


export function getSearchProducts(query, nextPage) {
  return async (dispatch) => {
    try {
        dispatch(addProductsLoading());
        const res = await getProductsRequest(query, nextPage)
        dispatch(addProducts(res.data));
    } catch (error) {
      console.log(error)
      dispatch(addProductsFail())
    }
  }
}


export function loadMoreSearchProducts(query, nextPage) {
  return async dispatch => {
    try {
      dispatch(addProductsLoading());
      const res = await getProductsRequest(query, nextPage)
      dispatch(loadMoreProducts(res.data));
  } catch (error) {
    console.log(error)
    dispatch(addProductsFail())
  }
  }
}


const getProductsRequest = async (query, nextPage) => {
  const body = {
    "query": query ? query : null,
    "category": "string",
    "discountRanges": [
      {
        "min": 0,
        "max": 0
      }
    ],
    "priceRanges": [
      {
        "min": 0,
        "max": 0
      }
    ],
    "page": nextPage ? nextPage : 0
}
  const res =  await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/Search`, body, {headers: {'Content-Type': 'application/json'}})
  return res
}