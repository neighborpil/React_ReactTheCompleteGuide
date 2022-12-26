import {createSlice} from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add: (state, action) => {
            const updateTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.item.id);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.item.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(actin.payload);
            }
            return {
                items: updatedItems,
                totalAmount: updateTotalAmount
            };
        }
    }
})