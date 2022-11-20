import axios from 'axios';
import React from 'react';
import { useState } from 'react';

export default function FacultyCreate() {
    const [name, setName] = useState();
    const [registerErrors, setRegisterErrors] = useState(" ");
    var token = localStorage.getItem("token");
    function onSubmitHandle(e) {
        e.preventDefault();
        var data = { Name: name }
        axios.post("https://localhost:7049/api/katib/createfaculty", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => { alert("Faculty Succesfully added"); setName(""); setRegisterErrors("") }).catch(err => setRegisterErrors(err.response.data.errors));
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
                            <label htmlFor="name">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <span className='text-danger'>  {registerErrors.Name != null && registerErrors.Name}</span>
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
