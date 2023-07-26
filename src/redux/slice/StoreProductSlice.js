import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: null
}

const StoreProductSlice = createSlice({
  name: 'storeProduct',
  initialState,
  reducers: {
    STORE_PRODUCTS(state, action){
        state.products= action.payload.ProductData
    }
  }
});

export const {STORE_PRODUCTS} = StoreProductSlice.actions
export const selectProducts= (state)=> state.storeProduct.products
export default StoreProductSlice.reducer