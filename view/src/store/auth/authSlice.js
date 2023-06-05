import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authAPI";
import { isAuthenticated } from "./authAPI"

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
            .addCase(isAuthenticated.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload;
            })
            .addCase(isAuthenticated.rejected, (state, action) => {
                state.isAuthenticated = false;
            });
    }
});

export const selectUser = (state) => state.auth.user;
export const selectAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;