import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authAPI";
import { isAuthenticated } from "./authAPI"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        registerError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
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
export const selectRegisterError = (state) => state.auth.registerError;

export default authSlice.reducer;