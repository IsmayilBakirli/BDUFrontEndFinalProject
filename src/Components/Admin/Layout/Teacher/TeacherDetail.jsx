import React from 'react';
import TableHead from '../../../Table/TableHead';
import Layout from '../Layout';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
export default function TeacherDetail(props) {
    const { id } = useParams();
    const [teacher, setTeacher] = useState({});
    useEffect(() => {
        axios.get(`https://localhost:7049/api/teacher/get/${id}`).then((resp) => setTeacher(resp.data)).catch((err) => console.log(err));
    }, []);
    return (
        <>
            <Layout htmlCodes={
                <section className='teacherDetail'>
                    <div className="container">
                        <div className="row mt-3 align-items-center" style={{ backgroundColor: "red", height: "40px", borderRadius: "15px" }}>
                            {<span className='text-light' style={{ fontSize: "20px" }}>Müəllim detalları</span>}
                        </div>
                        <div className="row ">
                            <div className="button d-flex justify-content-end mt-4">
                                { <Link to="/profile/teachers/createteacher"><button className='btn btn-success'>Create</button></Link> }
                            </div>
                        </div>
                        <div className="row mt-5">
                            <table className='styled-table'>
                                <thead>
                                    <tr>
                                        <th>
                                            Image
                                        </th>
                                        <th>
                                            FirstName
                                        </th>
                                        <th>
                                            LastName
                                        </th>
                                        <th>
                                            Username
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Fincode
                                        </th>
                                        <th>
                                            Info
                                        </th>
                                        <th>
                                            Subjects
                                        </th>
                                        <th>
                                            Groups
                                        </th>
                                        <th>
                                            Job Year
                                        </th>
                                        <th>
                                            Birth Location
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td >
                                            <img src={teacher.imageUrl}style={{width:"200px",height:"100px"}} alt="just an teaher image" />
                                        </td>
                                        <td >
                                            <p className='mt-5'>{teacher.firstName}</p>
                                        </td>
                                        <td >
                                            <p className='mt-5'>{teacher.lastName}</p>
                                        </td>
                                        <td >
                                            <p className='mt-5'>{teacher.userName}</p>
                                        </td>
                                        <td >
                                            <p className='mt-5'>{teacher.email}</p>
                                        </td>
                                        <td>
                                            <p className='mt-5'>{teacher.finCode}</p>
                                        </td>
                                        <td>
                                            <p className='mt-5'>{teacher.info}</p>
                                        </td>
                                        <td >
                                            <p className='mt-5'>{teacher.subjects}</p>
                                        </td>
                                        <td>
                                            <p className='mt-5'>{teacher.groups}</p>
                                        </td>
                                        <td >
                                            <p className='mt-5'>{teacher.jobYear}</p>
                                        </td>
                                        <td >
                                            <p className='mt-5'>{teacher.birthLocation}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            }
            />

        </>
    )
}
