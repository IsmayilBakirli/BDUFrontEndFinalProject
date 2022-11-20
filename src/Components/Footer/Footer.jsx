import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
    return (
        <footer>
            <div className="container ">
                <div className="row links" style={{ padding: "40px 70px" }}>
                    <div className="col-2 d-flex">
                        <ul className='list-unstyled'>
                            <li style={{ fontSize: "13px" }}  ><span>Fakültələr</span></li>
                            <li className='mt-1' style={{ fontSize: "13px" }}><span>İnstitutlar</span></li>
                            <li className='mt-1' style={{ fontSize: "13px" }}><span>Elmi Kitabxana</span></li>
                            <li className='mt-1' style={{ fontSize: "13px" }}><span>Jurnallar</span></li>
                            <li className='mt-1' style={{ fontSize: "13px" }} > <span>Lisey</span></li>
                            <li className='mt-1' style={{ fontSize: "13px" }}  ><span>Poliklinika</span></li>
                        </ul>
                        <p className='veriticalRow '>   </p>
                    </div>
                    <div className="col-2 d-flex">
                        <ul className='list-unstyled'>
                            <Link className='text-decoration-none' to={"/history"}><li style={{ fontSize: "13px" }} ><span>Bdu-nun tarixi</span></li></Link>
                            <Link className='text-decoration-none' to={"/rektors"}> <li style={{ fontSize: "13px" }} className='mt-1'><span>Rektorlarımız</span></li></Link>
                            <li style={{ fontSize: "13px" }} className='mt-1'><span>Tanınmış məzunlar</span> </li>
                            <li style={{ fontSize: "13px" }} className='mt-1'><span>Bdu-da Təhsil</span></li>

                        </ul>
                        <p className='veriticalRow position '>   </p>
                    </div>
                    <div className="col-4" style={{ position: "relative" }}>
                        <img src="	https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_of_Baku_State_University.png" alt="Bdu Logo" style={{ width: "100px", position: "absolute", left: "35%", top: "-88px" }} />
                        <div className="name" style={{ position: "absolute", left: "25%", top: "50px" }}>
                            <p className='mb-0' style={{ fontSize: "30px", color: "white" }}>BAKI DÖVLƏT </p>
                            <p className='mb-0' style={{ fontSize: "23px", color: "white", marginLeft: "20px", opacity: "0.2" }}>UNİVERSİTETİ</p>
                        </div>

                    </div>
                    <div className="col-2 d-flex" >
                        <p className='veriticalRow links before'>   </p>
                        <div className="usefulLinks ">
                            <ul className='list-unstyled'>
                                <li style={{ fontSize: "17px" }}>Linklər</li>
                                <li className='mt-1'><a className='text-decoration-none text-light' style={{ fontSize: "13px" }} href="https://azerbaijan.az/"><span>azerbaijan.az</span></a></li>
                                <li className='mt-1'><a className='text-decoration-none text-light' style={{ fontSize: "13px" }} href="https://heydaraliyevcenter.az/#main"><span>heydar-aliyev.org</span></a></li>
                                <li className='mt-1'><a className='text-decoration-none text-light' style={{ fontSize: "13px" }} href="https://president.az/"><span>president.az</span></a></li>
                                <li className='mt-1'><a className='text-decoration-none text-light' style={{ fontSize: "13px" }} href="https://edu.gov.az/"><span>edu.gov.az</span></a></li>
                                <li className='mt-1'><a className='text-decoration-none text-light' style={{ fontSize: "13px" }} href="https://science.gov.az/az"><span>science.gov.az</span></a></li>
                                <li className='mt-1'><a className='text-decoration-none text-light' style={{ fontSize: "13px" }} href="http://www.bsun.org/"><span>bsun.org</span></a></li>
                                <li className='mt-1'><a className='text-decoration-none text-light' style={{ fontSize: "13px" }} href="http://sesremo.eu/"><span>sesremo.eu</span></a></li>

                            </ul>

                        </div>
                        <p className='veriticalRow links'>   </p>
                    </div>
                    <div className="col-2" >
                        <ul className='list-unstyled text-light'>
                            <li className='mt-1' style={{ fontSize: "17px" }}>Əlaqə</li>
                            <li className='mt-1' style={{ fontSize: "13px" }}><FontAwesomeIcon className='me-1' style={{ fontSize: "11px" }} icon={faLocationDot} />Akamedik Zahid Xəlilov Küçəsi-33</li>
                            <li className='mt-1' style={{ fontSize: "13px" }}><FontAwesomeIcon className='me-1' icon={faEnvelope} style={{ fontSize: "11px" }} />AZ1148</li>
                            <li className='mt-1' style={{ fontSize: "13px" }}>Fax (+9942 12)598 33 76</li>
                            <li className='mt-1'><FontAwesomeIcon icon={faEnvelopeSquare} style={{ fontSize: "13px", color: "white" }} className='me-1' /> info@bsu.edu.az</li>
                        </ul>
                    </div>
                    <hr className='text-light' />
                </div>
                <div className="row end">
                    <ul className='d-flex list-unstyled'>
                        <li>© University of BDU 2022</li>
                        <li>Bizimle Elaqe Saxlayin</li>
                        <li>Sayt Haqqinda</li>
                        <li>Nezaket protokollari</li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}
