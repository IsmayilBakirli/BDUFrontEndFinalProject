import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../Layout/Layout';

export default function DekanCreate() {
    const[faculties,setFaculties]=useState([]);
    const[facultyId,setFacultyid]=useState(4);
    const[name,setName]=useState(" ");
    const[surname,setSurname]=useState(" ");
    const[description,setDescription]=useState(" ");
    const[imageFile,setImageFile]=useState(null);
    useEffect(()=>{
        axios.get("https://localhost:7049/api/faculty/get").then(response=>setFaculties(response.data)).catch(error=>console.log(error));
    },[]);
    if(imageFile){
        var imageUrl=URL.createObjectURL(imageFile);
    }
    var token=localStorage.getItem("token");
    const[errors,setErrors]=useState({});
    const[registerErrors,setRegisterErrors]=useState([]);
    const[existError,setExistError]=useState(" ");
    function onSubmitHandle(e){
        e.preventDefault();
        var data={
            Name:name,
            Surname:surname,
            Description:description,
            Facultyid:facultyId,
            Imageurl:imageUrl
        }
        axios.post(`https://localhost:7049/api/rektor/createdekan`,data,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response=>{setErrors(" ");setExistError(" ");setRegisterErrors(" ");setName("");setSurname("");setDescription("");alert("Dekan succesfully addded")}).catch(err=>{if(err.response.data.errors!=null){setErrors(err.response.data.errors);setExistError(" ")}else if (err.response.data[0] != null){setRegisterErrors(err.response.data[0].errors)}else{setExistError(err.response.data.message);setErrors(" ")}})
    }
    return (
        <>
            <Layout htmlCodes={
                <>
                    <div className="row mt-5">
                        <div className="title d-flex justify-content-center">
                            <h3>Add Dekan</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5">
                            {existError!=null && <h6 className='text-danger'>{existError}</h6> }
                            <form  onSubmit={onSubmitHandle}>
                                <div className="formInputs">
                                    <label htmlFor="image">Image</label>
                                    <input type="file"  id="image" onChange={(e)=>setImageFile(e.target.files[0])} />
                                    {errors.ImageUrl!=null && <span className='text-danger'>{errors.ImageUrl}</span>}
                                </div>
                                <div className="formInputs mt-4">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" value={name} id='name' onChange={(e)=>setName(e.target.value)} />
                                    {errors.Name!=null && <span className='text-danger'>{errors.Name}</span>}
                                </div>
                                <div htmlFor="formInputs mt-4">
                                    <label htmlFor="surname">Surname</label>
                                    <input type="text" id='surname' value={surname} onChange={(e)=>setSurname(e.target.value)} />
                                    {errors.Surname!=null && <span className='text-danger'>{errors.Surname}</span>}
                                </div>
                                <div className="formInputs mt-4">
                                    <label htmlFor="description">Description</label>
                                    <input type="description" value={description} id='description' onChange={(e)=>setDescription(e.target.value)} />
                                    {errors.Description!=null && <span className='text-danger'>{errors.Description}</span>}
                                </div>
                                <div className="formInputs mt-4">
                                    <select id="faculties" onChange={(e)=>setFacultyid(e.target.value)}>
                                        {faculties.map((faculty)=>{
                                            return(
                                            <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                                            )
                                        })}
                                    </select>
                                    {errors.FacultyId!=null && <span className='text-danger'>{errors.Facultyid}</span>}
                                </div>
                                <div className="button d-flex justify-content-center mt-3">
                                    <button className='btn btn-primary' style={{width:"150px"}}>Add</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </>
            } />
        </>
    )
}