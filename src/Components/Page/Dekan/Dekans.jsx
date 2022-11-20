import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbars/Navbar';
import RightNavbar from '../../Navbars/RightNavbar';

export default function Dekans() {
    const [dekans, setDekans] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:7049/api/dekan/get").then(response => setDekans(response.data));
    }, []);
    let number = 1;
    return (
        <>
            <Navbar />
            <main className='dekans' style={{ padding: "50px 0px 100px 0px" }}>
                <section className='dekans'>
                    <div className="container">
                        <div className="row mb-4">
                            <div className="title d-flex justify-content-center">
                                <h3>Dekanlar</h3>
                            </div>
                        </div>
                        <div className="row">
                            {dekans.map((dekan) => {
                                return (
                                    <div key={dekan.id} className="col-4 " style={{ marginBottom: "70px" }}>
                                        <div className="myCard mt-4 d-flex">
                                            <div className="leftSide">
                                                <img  style={{ width: "150px", height: "200px", borderRadius: "5%",border:"2px solid grey" }} src={dekan.imageUrl} alt="Dekan" />
                                            </div>
                                            <div className="rightSide ms-4">
                                                <h5 style={{ fontSize: "22px" }}>{number}.{dekan.facultyname}</h5>
                                                <p className='d-none'> {number++}</p>
                                                <p style={{ fontSize: "17px" }}>{dekan.description} {dekan.name} {dekan.surname} {dekan.fathername}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </>

    )
}
