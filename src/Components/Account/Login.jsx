import React from 'react';
import { setUserName, setPassword, setUser, setErrorMesage } from '../../Redux/features/User/UserSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import {  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Login() {
    var navigate = useNavigate();
    var userName = useSelector((state) => state.user.username);
    var password = useSelector((state) => state.user.password);
    var user = useSelector((state) => state.user.user);
    var errotMesage = useSelector((state) => state.user.errorMesage);
    const[UserEmail,setUserEmail]=useState("");
    var dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        axios.post("https://localhost:7049/api/account/login", { UserEmail, password }).then(response => { localStorage.setItem("token", response.data); dispatch(setUser(jwt_decode(response.data))); navigate("/"); }).catch(err => {dispatch(setErrorMesage(err.response.data.message));console.log(err.response)});
        //localStorage.setItem("user",JSON.stringify(jwt_decode(response.data)))
    };
    useEffect(() => {
        if (user != null) {
            return navigate("/");
        }
    }, []);
    useEffect(()=>{
        return ()=>{
            dispatch(setErrorMesage(" "));
        }
    },[]);
    return (
        <div >
            <div className="container">
                <div className="row login " >
                    <div className="col-lg-7">
                        <img src="http://st2.depositphotos.com/4107269/7704/i/450/depositphotos_77040741-Booking-flight-tickets-on-line-concept.jpg" alt="Just an image" />
                    </div>
                    <div className="col-lg-5">
                        <div className="form">
                            <div className="title d-flex justify-content-center">
                                <h3>Log In</h3>
                            </div>
                            <div className="errorMesages">
                                {errotMesage != null ? <p className='text-danger'>{errotMesage}</p> : null}
                            </div>
                            <form className='mt-3' onSubmit={handleSubmit} >
                                <div className="form-inputs">
                                    <label htmlFor='UserEmail' >UserEmail </label>
                                    <input id='UserEmail' onChange={(e) => dispatch(setUserEmail(e.target.value))} style={{ width: "100%" }} />
                                </div>
                                <div className="form-inputs mt-3">
                                    <label htmlFor='password' >Password</label>
                                    <input id='password' onChange={(e) => dispatch(setPassword(e.target.value))} style={{ width: "100%" }} />
                                </div>
                                <div className="buttons d-flex justify-content-center mt-5">
                                    <button type='submit' className='btn btn-primary'>Login</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
