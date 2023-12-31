import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name: 'like',
    initialState: {
        items: [],
    },
    reducers: {
        like: (state, action) => {
            const existingItem = state.items.find(item => item._id === action.payload._id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            setStorage(state.items);
        },
        unLike: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                const existingItem = state.items[ index ];
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                } else {
                    state.items.splice(index, 1);
                }
            }
            setStorage(state.items);
        },
    },
});


const setStorage = (array) => {
    localStorage.setItem('likeState', JSON.stringify(array));
};







export const { like, unLike } = likeSlice.actions;
export default likeSlice.reducer;