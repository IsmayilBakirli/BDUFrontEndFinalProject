import { createSlice } from "@reduxjs/toolkit";

export const KatibSlice=createSlice({
    name:"katib",
    initialState:{
        katibs:[]
    },
    reducers:{
        setKatib:(state,action)=>{
            state.katibs=action.payload;
        }
    }
});

export const {setKatib} =KatibSlice.actions;

export default KatibSlice.reducer;