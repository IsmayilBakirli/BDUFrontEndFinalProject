import React from 'react';
import Navbar from '../../Navbars/Navbar';
import Footer from '../../Footer/Footer';
import Register from '../../Account/Register';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

export default function KatibPage() {
    var user=useSelector(state=>state.user.user);
    var navigate=useNavigate();
    useEffect(()=>{
        // let body = document.querySelector("body");
        // body.classList.add("p-0");
        if(user.role != "Rektor"){
            navigate("/");
        }
    },[]);

    // useEffect(()=>{
    //     return ()=>{
    //         let body = document.querySelector("body");
    //         body.classList.remove("p-0");
    //     }
    // },[]);

    return (
        <>
            <Navbar />
            <section className='katib' >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-3 mt-3 d-flex justify-content-center">
                            <h3 className='text-light'>Katib elave edin</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <Register />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
