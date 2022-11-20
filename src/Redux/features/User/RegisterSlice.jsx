import { createSlice } from "@reduxjs/toolkit";
export const RegisterSlice=createSlice({
    name:"register",
    initialState:{
        firstname:" ",
        lastname:" ",
        username:" ",
        email:" ",
        password:" ",
        submit:false,
        errors:{},
        registerErrors:[]
    },
    reducers:{
        setFirstName:(state,action)=>{
            state.firstname=action.payload
        },
        setLastName:(state,action)=>{
            state.lastname=action.payload
        },
        setUserName:(state,action)=>{
            state.username=action.payload
        },
        setEmail:(state,action)=>{
            state.email=action.payload
        },
        setPassword:(state,action)=>{
            state.password=action.payload
        },
        isSubmit:(state,action)=>{
            state.submit=action.payload;
        },
        setErrors:(state,action)=>{
            state.errors=action.payload;
        },
        setRegisterErrors:(state,action)=>{
            state.registerErrors=action.payload;
        }

    }
}) ;

export const {setFirstName,setLastName,setUserName,setEmail,setPassword,isSubmit,setErrors,setRegisterErrors} =RegisterSlice.actions;

export default RegisterSlice.reducer;