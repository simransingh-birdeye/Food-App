import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState :{
        foodItems:[],
        items: [],
        totalAmount: 0
    },
    reducers: {
        get(state,action){
            state.foodItems = action.payload;
        },
        add(state, action) {
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            if (existingCartItem) {
                let updatedItem = {
                    ...existingCartItem, amount: existingCartItem.amount + action.payload.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload);
            }
            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
            state.totalAmount = updatedTotalAmount;
            state.items = updatedItems;
        },
        remove(state, action) {
            const items = action.payload.cartItems//
            const existingCartItemIndex = items.findIndex(item => item.id === action.payload.id)
            const existingItem = items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = items.filter(item => item.id !== action.payload.id);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            state.totalAmount = updatedTotalAmount;
            
            state.items = updatedItems;
        }
    }
});

export const {get,add, remove}  = cartSlice.actions;
export default cartSlice.reducer;