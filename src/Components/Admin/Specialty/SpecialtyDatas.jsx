import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SpecialtyDatas() {
    const [specialities, setSpecialities] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7049/api/specialty/get`).then(response => setSpecialities(response.data)).catch(err => console.log(err));
    }, []);
    return (
        <div className="container">
            <div className="row mt-3 align-items-center " style={{ backgroundColor: "red", height: "40px", borderRadius: "15px" }}>
                <span className='text-light' style={{ fontSize: "20px" }}>Specialities</span>
            </div>
            <div className="row">
                <div className="button d-flex justify-content-end mt-4">
                    <Link to="/profile/specialities/createspecialty"><button className='btn btn-success'>Create</button></Link>
                </div>
            </div>
            <div className="row">
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>
                                <p>Id</p>
                            </th>
                            <th>
                                <p>Name</p>
                            </th>
                            <th>
                                <p>
                                    Faculty's Name
                                </p>
                            </th>
                            <th>
                                <p>
                                    CreatedDate
                                </p>
                            </th>
                            <th  className='details'>
                                <p>
                                    Details
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {specialities.map((specialty) => {
                            return(
                            <tr key={specialty.id}>
                                <td>
                                    <p>
                                        {specialty.id}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {specialty.name}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {specialty.facultyName}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {specialty.createdDate}
                                    </p>

                                </td>
                                <td className="details">
                                    <p><button className='btn btn-danger mt-5 ms-3 '>Update</button>
                                        <button className='btn btn-warning mt-5 ms-3'>Delete</button></p>
                                </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
