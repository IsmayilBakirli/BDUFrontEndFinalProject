import {createSlice} from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
var userValue;
var token=localStorage.getItem("token");
if(token == null || token=="null" ){
    userValue=null;
}
else{
    userValue=jwt_decode(localStorage.getItem("token"));
}
export const userSlice=createSlice({
    name:"user",
    initialState:{
        user: userValue,
        username:" ",
        password:" ",
        errorMesage:" ",
        login:" ",
        token:" "
    },
    reducers:{
        setUserName:(state,action)=>{
            state.username=action.payload
        },
        setPassword:(state,action)=>{
            state.password=action.payload
        },
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setErrorMesage:(state,action)=>{
            state.errorMesage=action.payload
        },
        setToken:(state,action)=>{
            state.token=action.payload;
        },
        isLogin:(state,action)=>{
            state.login=action.payload;
        }
    }
});


export const {setUserName,setPassword,setUser,setErrorMesage,setToken,isLogin}=userSlice.actions;


export default userSlice.reducer;