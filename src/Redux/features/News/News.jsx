import {createSlice} from '@reduxjs/toolkit';

export const NewsSlice=createSlice({
    name:"news",
    initialState:{
        news:[],
        graduates:[],
        newsdata:[]
    },
    reducers:{
        setNews:(state,action)=>{
            state.news=action.payload;
        },
        setGraduate:(state,action)=>{
            state.graduates=action.payload;
        },
        setNewsData:(state,action)=>{
            state.newsdata=action.payload;
        }
    }
});

export const {setNews,setGraduate,setNewsData} =NewsSlice.actions;

export default NewsSlice.reducer;