import React from 'react';
import Layout from '../Layout/Layout';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
export default function StudentCreate() {
    var date=new Date();
    const [firstname, setFirstname] = useState(" ");
    const [lastname, setLastname] = useState(" ");
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [gender, setGender] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [fincode, setFincode] = useState(" ");
    const [division, setDivision] = useState(" ");
    const [facultyid, setFacultyid] = useState(0);
    const [specialtyid, setSpecialtyid] = useState(0);
    const [groupid, setGroupid] = useState(0);
    const [birthday, setBirthday] = useState(date);
    const [faculties, setFaculties] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [groups, setGroups] = useState([]);
    const [birthlocation, setBirthlocation] = useState(" ");
    const [phonenumber, setPhonenumber] = useState(" ");
    const[imagefile,setImagefile]=useState(null);
    
    const[errors,setErrors]=useState({});
    const[registerErrors,setRegisterErrors]=useState([]);

    if(imagefile){
        var imageurl=URL.createObjectURL(imagefile);
    }
    useEffect(() => {
        axios.get("https://localhost:7049/api/faculty/get").then((response) => setFaculties(response.data)).catch((err) => console.log(err));
    }, []);
    function facultiesHandler(e) {
        setGroups([]);
        axios.get(`https://localhost:7049/api/specialty/GetForFacultyId/${e.target.value}`).then((response) => setSpecialities(response.data));
        setFacultyid(e.target.value);
    }
    function groupsHandler(e) {
        setSpecialtyid(e.target.value);
        axios.get(`https://localhost:7049/api/group/getforspecialtyid/${e.target.value}`).then((response) => {setGroups(response.data);});
    }
    
    var token = localStorage.getItem("token");
    var data = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        gender: gender,
        email: email,
        finCode: fincode,
        division: division,
        facultyId: facultyid,
        groupId: groupid,
        specialtyId: specialtyid,
        birthDay: birthday,
        birthLocation: birthlocation,
        phoneNumber: phonenumber,
        imageUrl:imageurl
    } 
    function onSubmithandler(e) {
        e.preventDefault();  
        axios.post("https://localhost:7049/api/rektor/createstudent", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {alert("student succesfully added!");setFirstname(" ");setLastname(" ");setUsername(" ");setPassword(" ");setGender(" ")
    setEmail(" ");setDivision(" ");setFincode(" ");setBirthlocation(" ");setPhonenumber(" ");setRegisterErrors([])}).catch((err) => {if(err.response.data.errors!=null){setErrors(err.response.data.errors)}else if (err.response.data[0] != null){setRegisterErrors(err.response.data[0].errors)}})
    }
    return (
        <>
            <Layout
                htmlCodes={
                    <div className='row justify-content-center'>
                        <div className="col-md-6 register" >
                            <div className="title">
                                <h2>Add Student</h2>
                            </div>
                            {registerErrors != null ? registerErrors.map((error, index) => <p key={index} className='text-danger p-0 m-0'>{error.errorMessage}</p>) : null}
                            <form className='registerForm' onSubmit={onSubmithandler}  >
                                <div className="formInputs">
                                    <label htmlFor='image'>Image</label>
                                    <input id='image'  type="file" onChange={(e) => setImagefile(e.target.files[0])} />
                                    {errors.ImageUrl!=null && <span className='text-danger'>{errors.ImageUrl}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='firstname'>FirstName</label>
                                    <input id='firstname' value={firstname} type="text" onChange={(e) => setFirstname(e.target.value)} />
                                    {errors.FirstName!=null && <span className='text-danger'>{errors.FirstName}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='lastname'>LastName</label>
                                    <input id='lastname' value={lastname} type="text" onChange={(e) => setLastname(e.target.value)} />
                                    {errors.LastName!=null && <span className='text-danger'>{errors.LastName}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='username'>UserName</label>
                                    <input id='username' value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
                                    {errors.UserName!=null && <span className='text-danger'>{errors.UserName}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='phonenumber'>PhtoneNumber</label>
                                    <input id='phonenumber' value={phonenumber} type="text" onChange={(e) => setPhonenumber(e.target.value)} />
                                    {errors.PhoneNumber!=null && <span className='text-danger'>{errors.PhoneNumber}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='gender'>Gender</label>
                                    <select id="gender" style={{ width: "100%" }} onClick={(e)=>setGender(e.target.value)} onChange={(e) => setGender(e.target.value)}>
                                        <option value="Kisi">Kisi</option>
                                        <option value="Qadin">Qadin</option>
                                    </select>
                                    {errors.Gender!=null && <span className='text-danger'>{errors.Gender}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='email' >Email</label>
                                    <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                                    {errors.Email!=null && <span className='text-danger'>{errors.Email}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='birthday'>Birthday</label>
                                    <input id='birthday' value={birthday}  type='date' onChange={(e) => setBirthday(e.target.value)} />

                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='location'>BirthLocation</label>
                                    <input id='location' type='text' value={birthlocation} onChange={(e) => setBirthlocation(e.target.value)} />
                                    {errors.BirthLocation!=null && <span className='text-danger'>{errors.BirthLocation}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='fincode'>FinCode</label>
                                    <input id='fincode' type='text' value={fincode} onChange={(e) => setFincode(e.target.value)} />
                                    {errors.FinCode!=null && <span className='text-danger'>{errors.FinCode}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='division'>Division</label>
                                    <select id="division" style={{ width: "100%" }} onClick={(e) => setDivision(e.target.value)}  onChange={(e) => setDivision(e.target.value)}>
                                        <option value="Azerbaycan">Azerbaycan</option>
                                        <option value="Rusiya">Rusya</option>
                                        <option value="ingilis">Ingilis</option>
                                    </select>
                                    {errors.Division!=null && <span className='text-danger'>{errors.Division}</span>}
                                </div>

                                <div className="formInputs mt-3">
                                    <label htmlFor="faculty">Faculty</label>
                                    <select id='faculty' style={{ width: "100%" }} onChange={(e) => facultiesHandler(e)} >
                                        {faculties.map((faculty) => {
                                            return (
                                                <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                                            )
                                        })}
                                    </select>
                                    {errors.FacultyId!=null && <span className='text-danger'>{errors.FacultyId}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='specialty'>Specialty</label>
                                    <select id='specialty' style={{ width: "100%" }} onClick={(e) => groupsHandler(e)}  onChange={(e) => groupsHandler(e)}  >
                                        {specialities.map((specialty) => {
                                            return (
                                                <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                                            )
                                        })}
                                    </select>
                                    {errors.SpecialtyId!=null && <span className='text-danger'>{errors.SpecialtyId}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='group'>Group</label>
                                    <select id='group' style={{ width: "100%" }}  onClick={(e) => {setGroupid(e.target.value);}} onChange={(e) => setGroupid(e.target.value)}  >
                                        {groups.map((group) => {
                                            return (
                                                <option key={group.id} value={group.id}>{group.groupName}</option>
                                            )
                                        })}
                                    </select>
                                    {errors.GroupId!=null && <span className='text-danger'>{errors.GroupId}</span>}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='password'>Password</label>
                                    <input id="password" value={password} type="text" onChange={(e) => setPassword(e.target.value)} />
                                    {errors.Password!=null && <span className='text-danger'>{errors.Password}</span>}
                                </div>
                                <div className="addButton d-flex justify-content-center mt-5 mb-5">
                                    <button type='submit' className='btn btn-primary ps-5 pe-5'>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>

                } />
        </>
    )
}