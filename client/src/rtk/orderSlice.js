import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk("order/fetchOrder", async (body) => {
    const token = JSON.parse(localStorage.getItem('userToken'))
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${token}`,
            },
    };
  
    console.log(body, config)
    
    const response = await axios.post(`http://localhost:8000/api/order`, body, config)
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

const orderSlice = createSlice({
    name: "order",
    initialState: {
        loading: false,
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchOrder.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                if (state.data.status === 'success') {
                    state.error = null;
                    localStorage.setItem('orderData', JSON.stringify(state.data.order));
                    localStorage.setItem('orderToken', JSON.stringify(state.data.token));
                } else {
                    state.error = action.payload.message;
                }
            });

    },
});
export default orderSlice.reducer;