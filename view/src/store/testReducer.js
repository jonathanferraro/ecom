import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
    name: 'test',
    initialState: ['hello', 'world'],
    reducers: {
        addWord: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {addWord} = testSlice.actions;
export const selectTest = (state) => state.test;

export default testSlice.reducer;