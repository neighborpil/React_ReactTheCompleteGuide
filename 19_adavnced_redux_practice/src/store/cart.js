import {createSlice} from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalAmount: 0,
    totalCount: 0,
    show: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add: (state, action) => {
            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
            const updatedTotalCount = state.totalCount + 1;
            const existingCartItemIndex = state.items.findIndex(item => item.title === action.payload.title);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload);
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                totalCount: updatedTotalCount,
                show: state.show,
            };
        },
        remove: (state, action) => {
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            const existingCartItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingCartItem.price;
            const updatedTotalCount = state.totalCount - 1;
            let updatedItems;
            if (existingCartItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.payload.id);
            } else {
                const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                totalCount: updatedTotalCount,
                show: state.show,
            }
        },
        clear: (state) => {
            return initialCartState;
        },
        toggle: (state) => {
            return {
                items: state.items,
                totalAmount: state.totalAmount,
                totalCount: state.totalCount,
                show: !state.show
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;