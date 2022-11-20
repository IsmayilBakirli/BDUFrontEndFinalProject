import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

export default function DekansDatas() {
    const [dekans, setDekans] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7049/api/dekan/get`).then(response => setDekans(response.data)).catch((error) => console.log(error));
    }, []);
    return (
        <div className="container">
            <div className="row mt-3 align-items-center " style={{ backgroundColor: "red", height: "40px", borderRadius: "15px" }}>
                <span className='text-light' style={{ fontSize: "20px" }}>Dekan's</span>
            </div>
            <div className="row  ">
                <div className="button d-flex justify-content-end mt-4">
                    <Link to="/profile/dekans/createdekan"><button className='btn btn-success'>Create</button></Link>
                </div>
            </div>
            <div className="row">
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>
                                <p>
                                    Image
                                </p>
                            </th>
                            <th> <p>
                                Name
                            </p></th>

                            <th>
                                <p>
                                    Surname
                                </p>
                            </th>
                            <th>
                                <p>
                                    Faculty Name
                                </p>
                            </th>
                            <th>
                                <p>
                                    Details
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dekans.map((dekan) => {
                            return (
                                <tr key={dekan.id}>
                                    <td>
                                        <p>
                                            <img src={dekan.imageUrl} style={{ width: "100px", height: "100px", borderRadius: "50%" }} alt="dekan image" />
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            {dekan.name}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            {dekan.surname}
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            {dekan.facultyname}
                                        </p>
                                    </td>
                                    <td style={{ width: "200px" }} className="details">
                                        <p><button className='btn btn-danger mt-5 ms-3 '>Update</button>
                                            <button className='btn btn-warning mt-5 ms-3'>Delete</button>
                                            <button className='btn btn-primary mt-5 ms-3'>Detail</button></p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
