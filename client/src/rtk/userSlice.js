import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    "user/fetchUser", async ( body, token) => {


        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.post(`http://localhost:8000/api/user/${body.route}`, body, config)
            .then((response) => {
                // Promise is fulfilled
                console.log('Request successful:', response.data);
                return response.data
            })
            .catch((error) => {
                // Promise is rejected
                console.error('Request failed:', error.response.data);
                return error.response.data
            });
      
        return response;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                if (state.data.status === 'success') {
                    state.error = null
                    localStorage.setItem('userData',JSON.stringify(state.data.user))
                    localStorage.setItem('userToken', JSON.stringify(state.data.token))
                } else {
                    state.error = action.payload.message;
                }
            })
            
    },
});
export default userSlice.reducer;