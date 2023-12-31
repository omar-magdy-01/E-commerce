import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk('products/fetchProducts', async (queryObject) => {
    const Axios = await axios.get(`http://localhost:8000/api/product`, {
        params: queryObject
    });
    return Axios.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        // Add additional reducers here if needed
    },
    extraReducers:
        (builder) =>
            builder
                .addCase(fetchProducts.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(fetchProducts.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.products = action.payload.data;
                    setStorage(state.products)
                })
                .addCase(fetchProducts.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                    })
});

const setStorage = (object) => {
    localStorage.setItem("productState", JSON.stringify(object));
}


export default productsSlice.reducer;
