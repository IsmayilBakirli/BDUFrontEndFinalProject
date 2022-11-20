import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import LeftNavbar from '../../Navbars/LeftNavbar';
import Navbar from '../../Navbars/Navbar';
import { setNewsData } from '../../../Redux/features/News/News';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function NewsDetail() {
    var newsdata = useSelector((state) => state.news.newsdata);
    var dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://localhost:7049/api/news/${id}`).then((response) => dispatch(setNewsData(response.data)));
    }, []);
    return (
        <>
            <Navbar />
            <main>
                <section className='newsdetail'>
                    <div className="container">


                        <div className="row justify-content-end">
                            <LeftNavbar />
                            <div className="col-md-8  mb-5">
                                <div className="myCard">
                                    <div className="myCardHeader">
                                        <div className="title justify-content-center p-3">
                                            <h3 className='mb-3'>{newsdata.title != null && newsdata.title}</h3>
                                            <p style={{ fontSize: "20px", fontWeight: "400" }}>{newsdata.content != null && newsdata.content.substring(0, newsdata.content.indexOf(".") + 1)}</p>
                                        </div>
                                    </div>
                                    <div className="myCardBody mt-3">
                                        <div className="image" style={{ height: "500px" }}>
                                            <img style={{ width: "100%", height: "100%", borderRadius: "5px" }} src={newsdata.imageNames != null && newsdata.imageNames[0]} alt="just an image" />
                                        </div>
                                    </div>
                                    <div className="myCardFooter">
                                        <div className="content p-5">
                                            <p style={{ fontSize: "18px" }}>{newsdata.content != null && newsdata.content}</p>
                                            {/* {
                                                newsdata.imageNames != null && newsdata.imageNames[1] != null && <div className="image" style={{ height: "200px" }}>
                                                    <img style={{ width: "100%", height: "100%" }} src={newsdata.imageNames[1]} alt="just an image" />
                                                </div>
                                            } */}
                                            {newsdata.imageNames!=null && newsdata.imageNames.map((news,index)=>{
                                                return( index!=0 && <img className='mt-4' key={index} style={{ width: "100%", height: "300px",border:"1px solid grey",borderRadius:"15px" }} src={news} alt="just an image" />)
                                            })}
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
