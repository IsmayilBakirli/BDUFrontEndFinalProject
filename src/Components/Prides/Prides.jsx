import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Prides() {
    const [prides, setPrides] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:7049/api/graduate").then((response) => setPrides(response.data));
    }, []);
    return (
        <section className='pride' >
            <div className="container">
                <div className="row ">
                    <div className="graduate  d-flex justify-content-center" >
                        <hr className='text-light me-3' style={{ width: "170px" }} />
                        <FontAwesomeIcon className='text-light' icon={faGraduationCap} style={{ fontSize: "30px" }} />
                        <hr className='text-light ms-3' style={{ width: "170px" }} />
                    </div>
                    <div className="title d-flex justify-content-center mt-4">
                        <h3 className='text-light' style={{ fontSize: "35px" }}>Fəxrlərimiz</h3>
                    </div>
                </div>
                <div className="row graduate">
                    {prides.map((pride) => {
                        return(
                        <div key={pride.id} className="col-md-4 mt-5 mb-5">
                            <div className="myCard d-flex">
                                <div className="leftSide">
                                    <img style={{ width: "180px", height: "200px" }} src={pride.imageName} alt={pride.name} />
                                </div>
                                <div className="rightSide ms-3">
                                    <div className="title text-light">
                                        <h2>{pride.name}</h2>
                                        <h5>{pride.startEducation}-{pride.startEducation+4}</h5>
                                    </div>
                                    <div className="content">
                                        <span className='text-light' style={{ fontSize: "22px" }}>{pride.info}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
                    <div className="link d-flex justify-content-end">
                        <Link className='text-decoration-none' to="/famousGraduates"><span >Bütün siyahı</span></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
