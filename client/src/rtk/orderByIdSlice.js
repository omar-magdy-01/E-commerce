import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrderById = createAsyncThunk("orderById/fetchOrderById", async (orderId) => {
    const token = JSON.parse(localStorage.getItem('userToken'));
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        },
        
    };
    


    const response = await axios.get(`http://localhost:8000/api/order/${orderId}`,  config)
        .then((response) => {
            // Promise is fulfilled
            console.log('Request successful:', response.data);
            return response.data;
        })
        .catch((error) => {
            // Promise is rejected
            console.error('Request failed:', error.response.data);
            return error.response.data;
        });

    return response;
}
);

const orderByIdSlice = createSlice({
    name: "orderById",
    initialState: {
        loading: false,
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchOrderById.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchOrderById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                if (state.data.status === 'success') {
                    state.error = null;
                    localStorage.setItem('orderByIdData', JSON.stringify(state.data.orderById));
                    localStorage.setItem('orderByIdToken', JSON.stringify(state.data.token));
                } else {
                    state.error = action.payload.message;
                }
            });

    },
});
export default orderByIdSlice.reducer;