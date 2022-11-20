import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Layout from '../Layout/Layout';

export default function GroupCreate() {
    const [faculties, setFaculties] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [facultyId, setFacultyId] = useState(4);
    const [groups, setGroups] = useState([]);
    const [specialtyId, setSpecialtyId] = useState(17);
    const [groupName, setGroupName] = useState("");
    const[errors,setErrors]=useState("");
    var token=localStorage.getItem("token");
    useEffect(() => {
        axios.get("https://localhost:7049/api/faculty/get").then(response => setFaculties(response.data)).catch((err) => console.log(err));
        axios.get(`https://localhost:7049/api/specialty/getforfacultyId/${facultyId}`).then(response=>setGroups(response.data)).catch((err)=>console.log(err))
    }, []);

    function onSubmitHandle(e) {
        e.preventDefault();
        var data = {
            facultyId,
            specialtyId,
            groupName
        }
        axios.post(`https://localhost:7049/api/katib/creategroup`,data,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response)=>{alert("Group succesfully added");setGroupName("");setErrors("")}).catch((err)=>{setErrors(err.response.data.errors)})
    }
    return (
        <>
            <Layout htmlCodes={
                <>
                    <div className="row mt-5">
                        <div className="title d-flex justify-content-center">
                            <h3>Add Group</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <form onSubmit={onSubmitHandle}>
                                <div className="formInputs">
                                    <label htmlFor="faculty">Faculty</label>
                                    <select id="faculty" onChange={(e) => { setFacultyId(e.target.value); axios.get(`https://localhost:7049/api/specialty/getforfacultyId/${e.target.value}`).then(response => setSpecialities(response.data)).catch((err) => console.log(err)) }}>
                                        {faculties.map(faculty => {
                                            return (
                                                <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="formInputs">
                                    <label htmlFor="specialty">Specialty</label>
                                    <select id="specialty" onChange={(e) => setSpecialtyId(e.target.value)}>
                                        {specialities.map(specialty => {
                                            return (
                                                <option key={specialty.id}>{specialty.name}</option>
                                            )
                                        })}
                                    </select>
                                
                                </div>
                                <div className="formInputs">
                                    <label htmlFor="groupname">GroupName</label>
                                    <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
                                    <span className='text-danger'>  {errors.GroupName != null && errors.GroupName}</span>
                                </div>
                                <div className="button d-flex justify-content-center mt-4">
                                    <button style={{ width: "100px" }} className='btn btn-primary'>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            } />
        </>
    )
}
