import { createSlice } from "@reduxjs/toolkit";

export const DiscoverSLice=createSlice({
    name:"discover",
    initialState:{
        discovers:[],
        discover:{}
    },
    reducers:{
        setDiscover:(state,action)=>{
            state.discovers=action.payload;
        },
        setDiscoverValue:(state,action)=>{
            state.discover=action.payload;
        }
    }
});

export const {setDiscover,setDiscoverValue} =DiscoverSLice.actions;

export default DiscoverSLice.reducer;