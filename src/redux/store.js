import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from './slice/AuthSlice';
import storeProductReducer from './slice/StoreProductSlice';
import FilterProductReducer from './slice/FilterProductSlice';
import ProductCartReducer from './slice/ProductCartSlice';
import OderDataReducer from './slice/OderDataSlice';
const rootReducer= combineReducers(
    {
        auth: authReducer,
        storeProduct: storeProductReducer,
        filtered: FilterProductReducer,
        cart: ProductCartReducer, 
        order: OderDataReducer,
    }
)

const store= configureStore({
    reducer: rootReducer,
   
})

export default store