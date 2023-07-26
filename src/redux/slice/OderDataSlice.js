import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderDetails: []
}

const OderDataSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    STORE_ORDERS(state,action){
      state.orderDetails= action.payload
      console.log(action.payload);
    }
  }
});

export const {STORE_ORDERS} = OderDataSlice.actions
export const selectOrderData= (state)=> state.order.orderDetails
export default OderDataSlice.reducer