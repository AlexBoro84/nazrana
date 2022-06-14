import { createSlice } from "@reduxjs/toolkit";
import {axiosWrapper} from '../utils/axiosWrapper'


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


export function getSearchProducts(query, filter, nextPage, priceRange) {
  return async (dispatch) => {
    try {
        dispatch(addProductsLoading());
        const res = await getProductsRequest(query, filter, nextPage, priceRange)
        dispatch(addProducts(res.data));
    } catch (error) {
      dispatch(addProductsFail())
    }
  }
}


export function loadMoreSearchProducts(query, filter, nextPage, priceRange) {
  return async dispatch => {
    try {
      dispatch(addProductsLoading());
      const res = await getProductsRequest(query, filter, nextPage, priceRange)
      dispatch(loadMoreProducts(res.data));
  } catch (error) {
    dispatch(addProductsFail())
  }
  }
}


const getProductsRequest = async (query, sortBy, nextPage, priceRange) => {


  const data = {
    "query": query ? query : null,
    "category": "string",
    "priceRanges": priceRange !== undefined ? [
      {
        "min": priceRange.split('-')[0],
        "max": priceRange.split('-')[1]
      }
    ] : null,
    "page": nextPage ? nextPage : 0,
    "sort": sortBy
}
  const res = await axiosWrapper('/Search', 'post', data)
  return res
}