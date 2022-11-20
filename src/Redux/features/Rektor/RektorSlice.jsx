import {createSlice} from '@reduxjs/toolkit';

export const RektorSlice=createSlice({
    name:"rektor",
    initialState:{
        activeRektor:{},
        rektors:[]
    },
    reducers:{
        setActiveRektor:(state,action)=>{
            state.activeRektor=action.payload;
        },
        setRektors:(state,action)=>{
            state.rektors=action.payload;
        }
    }
});

export const {setActiveRektor,setRektors} =RektorSlice.actions;

export default RektorSlice.reducer;