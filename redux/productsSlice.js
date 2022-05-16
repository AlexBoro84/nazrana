import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    total: null,
    nextPage: 0, 
    loading: false,
    error: null,
  },
  reducers: {
    addProductsLoading: (state, action) => {
        state.loading = true
    },
    addProducts: (state, action) => {
      state.products.push(action.payload.items);
      state.total = action.payload.total,
      state.nextPage = action.payload.nextPage,
      loading = false
    },
    addProductsFail: (state, action) => {
        state.products = [],
        state.total = null,
        state.nextPage = 0,
        state.loading = false,
        state.error = null
    }   
  },
});

export const { addProducts} = cartSlice.actions;
export default productsSlice.reducer;

export const getSearchProducts = ({query}) => async dispatch => {
  dispatch(addProductsLoading());
  const res =  await axios.post(`http://api.thenazrana.in/verify`, {},  {headers: {'Content-Type': 'application/json'}})
  console.log(res.data)
  if(!res.data){
      dispatch(addProductsFail())
  }
  dispatch(addProducts(response.data));
}