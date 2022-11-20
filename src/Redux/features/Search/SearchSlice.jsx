import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        value:""
    },
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const { changeValue } = searchSlice.actions;


export default searchSlice.reducer;