import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbars/Navbar';

export default function Rektors() {
    const [rektors, setRektors] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:7049/api/rektor/get").then((response) => setRektors(response.data)).catch((error) => console.log(error));
    }, []);
    return (
        <>
            <Navbar />
            <main style={{padding:"50px 0px 100px 0px"}}>
                <section className='rektors mt-5'>
                    <div className="container">
                        <div className="row">
                            <div className="title d-flex justify-content-center">
                                <p style={{fontSize:"35px",fontWeight:"500"}}>Rektorlar</p>
                            </div>
                        </div>
                        <div className="row">
                            {rektors.map((rektor) => {
                                return(
                                <div key={rektor.id} className="col-md-6 mt-5 mb-5">
                                    <div className="myCard d-flex">
                                        <div className="leftSide">
                                            <img style={{ width: "150px", height: "180px", borderRadius: "20px" }} src={rektor.imageUrl} alt={rektor.name} />
                                        </div>
                                        <div className="rightSide ms-3">
                                            <div className="title">
                                                <h2>{rektor.name}</h2>
                                                <h5>{rektor.jobYear}</h5>
                                            </div>
                                            <div className="content">
                                                <span style={{ fontSize: "22px" }}>{rektor.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>

                </section>
            </main>

            <Footer />
        </>
    )
}
