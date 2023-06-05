import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authAPI";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
});

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;