import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbars/Navbar';
import axios from 'axios';
import { setDiscoverValue } from '../../../Redux/features/Discover/DiscoverSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
export default function EventDetails(props) {
    var dispatch = useDispatch();
    var event = useSelector((state) => state.discover.discover);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://localhost:7049/api/events/${id}`).then((response) => dispatch(setDiscoverValue(response.data))).catch((err) => console.log(err));
    }, []);
    return (
        <>
            <Navbar />
            <main>
                <section className='eventdetail'>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-6 image" >
                                <img src={event.imageNames != null && event.imageNames[0]} alt="just piscture" />
                            </div>
                            <div className="col-md-6">
                                <div className="title mb-4">
                                    <span className='bold'>Tip</span>
                                    {event.type!=null && <p style={{fontSize:"20px"}}>{event.type}</p>}
                                </div>
                                <h4>Tarix və vaxt</h4>
                                <p ><FontAwesomeIcon className='me-2' icon={faCalendar}/>{event.createdDate!=null && event.createdDate.substring(0,10)} {event.createdDate!=null && event.createdDate.substring(11,20)}</p>
                                <span className='bold'>Məkan</span>{event.venue != null && <p style={{fontSize:"20px"}}>{event.venue}</p>}
                            </div>
                        </div>
                        <hr className='mt-5 mb-5' />
                        <div className="row">
                            <div className="col-12">
                                <div className="title">
                                    <h2>Məlumat</h2>
                                </div>
                                <div className="content">
                                    {event.description != null && <span>{event.description}</span>}
                                </div>
                            </div>
                            <div className="images mt-5 mb-5 d-flex">
                                {event.imageNames != null &&
                                    event.imageNames.map((image,index) => {
                                        return (
                                            <div key={index} className="col-md-4 p-4" >
                                                <img className='small' src={image} alt="just an image" />
                                            </div>
                                        )
                                    })}
                                    
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
