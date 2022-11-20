import { createSlice } from '@reduxjs/toolkit';

export const SliderSlice = createSlice({
    name: "slider",
    initialState: {
        sliders:[]
    },
    reducers: {
        setSliders: (state, action) => {
            state.sliders = action.payload;
        }
    }
});


export const { setSliders } = SliderSlice.actions;


export default SliderSlice.reducer;