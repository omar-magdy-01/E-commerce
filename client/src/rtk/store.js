import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice'
import cartReducer from './cartSlice'
import likeReducer from './likeSlice'
import userReducer from './userSlice'
import orderReducer from './orderSlice'
import myOrderReducer from './myOrderSlice'
import orderByIdReducer from './orderByIdSlice'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        like: likeReducer,
        user: userReducer,
        order: orderReducer,
        myOrder: myOrderReducer,
        orderById: orderByIdReducer,
        // Add more reducers here if needed
    },
});
