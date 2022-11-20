import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbars/Navbar';

export default function ProRektor() {
    const[proRektors,setProRektors]=useState([]);
    useEffect(()=>{
        axios.get("https://localhost:7049/api/prorektor/get").then(response=>setProRektors(response.data)).catch(error=>console.log(error))
    },[]);
  return (
    <>
    <Navbar/>
    <main style={{padding:"80px 0px 150px 0px"}}>
        <section className='ProRektors'>
            <div className="container">
                <div className="row mb-3">
                    <div className="title d-flex justify-content-center">
                        <h3 >
                            Prorektorlar
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {proRektors.map((prorektor)=>{
                        return (
                            <div key={prorektor.id} className="col-4 " style={{ marginBottom: "70px" }}>
                            <div className="myCard mt-4 d-flex">
                                <div className="leftSide">
                                    <img  style={{ width: "150px", height: "200px", borderRadius: "5%",border:"2px solid grey" }} src={prorektor.imageUrl} alt="Dekan" />
                                </div>
                                <div className="rightSide ms-4">
                                    <h5 style={{ fontSize: "22px" }}>{prorektor.description}</h5>
                                    <p style={{ fontSize: "17px" }}>{prorektor.surname } {prorektor.name} {prorektor.fathername}</p>
                                </div>
                            </div>
                        </div>
                        )

                    })}
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>
  )
}
