import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Items: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
    quantity: 0,
    amount: 0,
    productID: []
}

const ProductCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART(state, action){
        console.log(action.payload)
        const ItemIndex= state.Items.findIndex((item)=> item.id=== action.payload.id)
        if(ItemIndex >=0){
            state.Items[ItemIndex].cartQuantity+= 1
        
        const itemID= state.Items[ItemIndex].id
        state.productID.push(itemID)
        }else{
            const newItems= {...action.payload, cartQuantity: 1}
            state.Items.push(newItems)
        }
        localStorage.setItem('cartItem', JSON.stringify(state.Items))
    },
    DECREASE_CART_ITEMS(state, action){
        const ItemIndex= state.Items.findIndex((item)=> item.id=== action.payload.id)
        if(state.Items[ItemIndex].cartQuantity > 1){
           state.Items[ItemIndex].cartQuantity -= 1
            
        }
        localStorage.setItem('cartItem', JSON.stringify(state.Items))
    },
    REMOVE_ITEMS(state, action){
        const deleteItem= state.Items.filter((item)=> item.id !== action.payload.id)
        state.Items= deleteItem
        localStorage.setItem('cartItem', JSON.stringify(state.Items))
    },
    CLEAR_CART_ITEMS(state, action){
        state.Items= []
        localStorage.setItem('cartItem', JSON.stringify(state.Items))
    },
    TOTAL_CART_QUANTITY(state, action){
        const totalItems= []
        state.Items.map((item)=> {
            const totalQuantity= item.cartQuantity
            return totalItems.push(totalQuantity)
        })
        const newTotalItems= totalItems.reduce((a,b)=> {
            return a+b
        },0)
        state.quantity= newTotalItems
    },
    TOTAL_CART_SUBTOTAL(state,action){
        const subtotal= []
        state.Items.map((item)=> {
            const {price, cartQuantity}= item
            const subAmount= price * cartQuantity
            return subtotal.push(subAmount)
        })
        const newSubtotal= subtotal.reduce((a,b)=> {
            return a+b
        },0)
        state.amount= newSubtotal

    }




  }
});

export const {ADD_TO_CART, DECREASE_CART_ITEMS,REMOVE_ITEMS,CLEAR_CART_ITEMS,TOTAL_CART_QUANTITY,TOTAL_CART_SUBTOTAL} = ProductCartSlice.actions
export const selectCartItems= (state)=> state.cart.Items
export const selectCartQuantity= (state)=> state.cart.quantity
export const selectCartAmount= (state)=> state.cart.amount

export default ProductCartSlice.reducer