import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMyOrder = createAsyncThunk("MyOrder/fetchMyOrder", async () => {
    const token = JSON.parse(localStorage.getItem('userToken'));
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        },
    };

  

    const response = await axios.get(`http://localhost:8000/api/order`, config)
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

const MyOrderSlice = createSlice({
    name: "MyOrder",
    initialState: {
        loading: false,
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMyOrder.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchMyOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                if (state.data.status === 'success') {
                    state.error = null;
                    localStorage.setItem('MyOrderData', JSON.stringify(state.data.MyOrder));
                    localStorage.setItem('MyOrderToken', JSON.stringify(state.data.token));
                } else {
                    state.error = action.payload.message;
                }
            });

    },
});
export default MyOrderSlice.reducer;