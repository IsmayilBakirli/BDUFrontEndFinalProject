import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../Layout/Layout';

export default function CreateSpecialty() {
    const [name, setName] = useState(" ");
    const [facultyId, setFacultyId] = useState(4);
    const [faculties, setFaculties] = useState([]);
    const [errors, setErrors] = useState(" ");
    var token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`https://localhost:7049/api/faculty/get`).then(response => { setFaculties(response.data) }).catch(err => setErrors(err.response.data.errors));
    }, []);
    function onSubmitHandle(e) {
        e.preventDefault();
        var data = {
            SpecialtyName: name,
            FacultyId: facultyId
        };
        axios.post("https://localhost:7049/api/katib/createSpecialty", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => { alert("Specialty Succesfully added"); setName(""); setErrors(""); }).catch(err => setErrors(err.response.data.errors));
    }
    return (
        <>
            <div className="row mt-5">
                <div className="title d-flex justify-content-center">
                    <h3>Add Dekan</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-5">
                    <form onSubmit={onSubmitHandle}>
                        <div className="formInputs">
                            <label htmlFor="Faculties">Faculty</label>

                            <select id='Faculties' onChange={(e) => setFacultyId(e.target.value)}>
                                {faculties.map(faculty => {
                                    return (
                                        <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="formInputs mt-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            {errors.SpecialtyName && <span className='text-danger'>{errors.SpecialtyName}</span>}
                        </div>
                        <div className="button d-flex justify-content-center mt-4">
                            <button style={{ width: "100px" }} className='btn btn-primary'>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
