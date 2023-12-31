import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            setState(state)
            const existingItem = state.items.find(item => item._id === action.payload._id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            setStorage(state.items)
        },
        removeItem: (state, action) => {
            setState(state)
            const index = state.items.findIndex(item => item._id === action.payload._id);
            if (index !== -1) {
                const existingItem = state.items[ index ];
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                } else {
                    state.items.splice(index, 1);
                }
            }
            setStorage(state.items)
        },
        deleteItem: (state, action) => {
            setState(state)
            
            const index = state.items.findIndex(item => item._id === action.payload._id);
            if (index !== -1) {
                    state.items.splice(index, 1);
            }
            setStorage(state.items);
        },
    },
});


const setStorage = (array) => {
    localStorage.setItem('cartState', JSON.stringify(array));
};
const setState = (state) => {
    if (localStorage.getItem("cartState")) {
        let storageCartItems = JSON.parse(localStorage.getItem("cartState"));
        state.items = storageCartItems
    }
}




export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;