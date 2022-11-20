import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveRektor, setRektors } from '../../Redux/features/Rektor/RektorSlice';

export default function Rektor() {
    var activeRektor = useSelector((state) => state.rektor.activeRektor);
    var dispatch = useDispatch();
    useEffect(() => {
        axios.get("https://localhost:7049/api/rektor/getactiverektor").then((response) => dispatch(setActiveRektor(response.data))).catch((error) => console.log(error))
    }
        , []);
    return (
        <section className='rektor'>
            <div className="container gx-0 ">
                <div className="row ">
                    <div className="title d-flex justify-content-center">
                        <h2 className='text-light mb-5'>BDU-nun Rektoru : <strong>Elçin Babayev</strong></h2>
                    </div>
                </div>
                <div className="row g-0 justify-content-center">
                    <div className="col-10"  >

                    </div>
                </div>
                <div className="row g-0 justify-content-center">
                    <div className="col-md-5 left">
                        <div className="title mb-4">
                            {activeRektor.name != null && <h3>{activeRektor.name} {activeRektor.lastName}</h3>}
                        </div>
                        <div className="content">
                            {activeRektor.jobYear != null && <p>{activeRektor.jobYear} ci ilde fealiyyete baslayib</p>}
                        </div>
                    </div>
                    <div className="col-md-5 right">
                        <div className="title mb-4">
                            <h6>Elaqe nomresi: {activeRektor.contactNumber != null && activeRektor.contactNumber}</h6>
                            <h6>Email: {activeRektor.email != null && activeRektor.email}</h6>
                        </div>
                        <div className="content">
                            <p className='text-light'>{activeRektor.description != null && activeRektor.description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
