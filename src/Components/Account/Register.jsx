import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setUserName, setEmail, setPassword, setErrors, setRegisterErrors, isSubmit } from '../../Redux/features/User/RegisterSlice';


export default function Register() {
    var dispatch = useDispatch();
    var firstname = useSelector((state) => state.register.firstname);
    var lastname = useSelector((state) => state.register.lastname);
    var username = useSelector((state) => state.register.username);
    var email = useSelector((state) => state.register.email);
    var password = useSelector((state) => state.register.password);
    const [jobYear, setJobYear] = useState(" ");
    const [birthday, setBirthday] = useState(null);
    const [finCode, setFinCode] = useState(" ");
    const [birthLocation, setBirthLocation] = useState(" ");
    const [info, setInfo] = useState(" ");
    const [imageFile, setImageFile] = useState(null);
    const [groups, setGroup] = useState([]);
    const [subjects, setSubject] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [specialtyId, setSpecialtyId] = useState(0);
    const [selectedGroupIds, setSelectedGroupIds] = useState([]);
    const [selectedSubjectIds, setSelectedSubjectIds] = useState([]);


    var errors = useSelector((state) => state.register.errors);
    var registerErrors = useSelector((state) => state.register.registerErrors);
    var token = localStorage.getItem("token");
    var submit = useSelector((state) => state.register.submit);
    if (imageFile != null) {
        var imageUrl = URL.createObjectURL(imageFile);
    }
    var data = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        jobyear: jobYear,
        birthday: birthday,
        fincode: finCode,
        info: info,
        birthlocation: birthLocation,
        groupids: selectedGroupIds,
        subjectids: selectedSubjectIds,
        imageUrl: imageUrl
    };
    useEffect(() => {
        // axios.get("https://localhost:7049/api/group/get").then((response) => setGroup(response.data));
        // axios.get("https://localhost:7049/api/subject/get").then((response) => setSubject(response.data));
        axios.get("https://localhost:7049/api/specialty/get").then((response) => setSpecialities(response.data));
    }, []);
    useEffect(() => {
        return () => {
            dispatch(setRegisterErrors([])); dispatch(setFirstName(" ")); dispatch(setLastName("  ")); dispatch(setUserName(" ")); dispatch(setEmail(" ")); dispatch(setPassword(" ")); dispatch(setErrors({}))
        }
    }, []);
    
    function onSubmitHandle(e) {
        e.preventDefault();
        switch (window.location.pathname) {
            case "/profile/katibs/createkatib":
                axios.post("https://localhost:7049/api/rektor/createkatib", { firstname, lastname, username, email, password,ImageUrl:imageUrl }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then((response) => { dispatch(setErrors({})); dispatch(isSubmit(true)); dispatch(setRegisterErrors([]));alert("Katib Succesfully addded!"); dispatch(setFirstName(" ")); dispatch(setLastName("  ")); dispatch(setUserName(" ")); dispatch(setEmail(" ")); dispatch(setPassword(" ")) })
                    .catch((error) => { if (error.response.data.errors != null) { dispatch(setErrors(error.response.data.errors)) } else if (error.response.data[0] != null) { dispatch(setErrors({})); dispatch(setRegisterErrors(error.response.data[0].errors)); } });
                break;
            case "/profile/teachers/createteacher":

                axios.post("https://localhost:7049/api/rektor/createteacher", data, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then((response) => { dispatch(setErrors({})); dispatch(isSubmit(true)); dispatch(setRegisterErrors([])); dispatch(setFirstName(" ")); dispatch(setLastName("  ")); dispatch(setUserName(" ")); dispatch(setEmail(" ")); dispatch(setPassword(" ")) })
                    .catch((error) => { if (error.response.data.errors != null) { dispatch(setErrors(error.response.data.errors)) } else if (error.response.data[0] != null) { dispatch(setErrors({})); dispatch(setRegisterErrors(error.response.data[0].errors)); } });
                break;
            default:
                break;
        }
    }
    function handleSelect(e) {
        axios.get(`https://localhost:7049/api/subject/forspecialtyid/${e.target.value}/1`).then((response) => { setSubject(response.data); });
        axios.get(`https://localhost:7049/api/group/getforspecialtyid/${e.target.value}`).then((response) => { setGroup(response.data); });
    }
    return (
        <>
            <div className="register d-flex justify-content-center">
                <div className="col-md-6 register" >
                    <div className="title">
                        {window.location.pathname == "/profile/katibs/createkatib" && <h2>
                            Create Katib
                        </h2>}
                        {window.location.pathname == "/profile/teachers/createteacher" && <h2>
                            Create Teacher
                        </h2>}
                    </div>
                    {registerErrors != null ? registerErrors.map((error, index) => <p key={index} className='text-danger p-0 m-0'>{error.errorMessage}</p>) : null}
                    <form className='registerForm' onSubmit={onSubmitHandle} >
                        <div className="formInputs">
                            <label htmlFor='firstname'>FirstName</label>
                            <input id='firstname' type="text" value={firstname} onChange={(e) => dispatch(setFirstName(e.target.value))} />
                            {errors.FirstName != null ? <span className='text-danger'>{errors.FirstName}</span> : null}
                        </div>
                        <div className="formInputs mt-3">
                            <label htmlFor='lastname'>LastName</label>
                            <input id='lastname' type="text" value={lastname} onChange={(e) => dispatch(setLastName(e.target.value))} />
                            {errors.LastName != null ? <span className='text-danger'>{errors.LastName}</span> : null}
                        </div>
                        <div className="formInputs mt-3">
                            <label htmlFor='username'>UserName</label>
                            <input id='username' type="text" value={username} onChange={(e) => dispatch(setUserName(e.target.value))} />
                            {errors.UserName != null ? <span className='text-danger'>{errors.UserName}</span> : null}

                        </div>
                        <div className="formInputs mt-3">
                            <label htmlFor='email'>Email</label>
                            <input id='email' type={'email'} value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                            {errors.Email != null ? <span className='text-danger'>{errors.Email}</span> : null}
                        </div>
                        <div className="formInputs mt-3">
                            <label htmlFor='password'>Password</label>
                            <input id="password" type="text" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                            {errors.Password != null ? <span className='text-danger'>{errors.Password}</span> : null}
                        </div>
                        {window.location.pathname == "/profile/teachers/createteacher" &&
                            <>
                                <div className="formInputs mt-3">
                                    <label htmlFor='job'>JobYears</label>
                                    <input id="job" type="text" value={jobYear} onChange={(e) => setJobYear(e.target.value)} />
                                    {errors.JobYear != null ? <span className='text-danger'>{errors.JobYear}</span> : null}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='birthday'>Birthday</label>
                                    <input id="birthday" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                                    {errors.BirthDay != null ? <span className='text-danger'>{errors.BirthDay}</span> : null}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='birthLocation'>Birth Location</label>
                                    <input id="birthLocation" type="text" value={birthLocation} onChange={(e) => setBirthLocation(e.target.value)} />
                                    {errors.BirthLocation != null ? <span className='text-danger'>{errors.BirthLocation}</span> : null}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='fincode'>Fin Code</label>
                                    <input id="fincode" type="text" value={finCode} onChange={(e) => setFinCode(e.target.value)} />
                                    {errors.FinCode != null ? <span className='text-danger'>{errors.FinCode}</span> : null}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='info'>Info</label>
                                    <input id="info" type="text" value={info} onChange={(e) => setInfo(e.target.value)} />
                                    {errors.Info != null ? <span className='text-danger'>{errors.Info}</span> : null}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='subject'>Specialities</label>
                                    <select style={{ width: "100%" }}  onChange={(e)=>handleSelect(e)}>
                                        {specialities.map(specialty => {
                                            return (
                                                <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                                            )
                                        })}
                                    </select>
                                    {errors.Subjects != null ? <span className='text-danger'>{errors.Subjects}</span> : null}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='subject'>Subjects</label>
                                    <select style={{ width: "100%" }} multiple onChange={(e) => {
                                        let subjectIds = []; for (const option of e.target.selectedOptions) {
                                            subjectIds.push(option.value);
                                        }; setSelectedSubjectIds(subjectIds);
                                    }}>
                                        {subjects.map((subject) => {
                                            return (
                                                <option key={subject.id} value={subject.id}>{subject.name}</option>
                                            )

                                        })}
                                    </select>
                                    {errors.Subjects != null ? <span className='text-danger'>{errors.Subjects}</span> : null}
                                </div>
                                <div className="formInputs mt-3">
                                    <label htmlFor='group'>Groups</label>
                                    <select style={{ width: "100%" }} multiple onChange={(e) => {
                                        let groupIds = []; for (const option of e.target.selectedOptions) {
                                            groupIds.push(option.value);
                                        }; setSelectedGroupIds(groupIds);
                                    }}>
                                        {groups.map(group => {
                                            return (
                                                <option key={group.id} value={group.id}>{group.groupName}</option>
                                            )
                                        })}
                                    </select>
                                    {errors.Groups != null ? <span className='text-danger'>{errors.Groups}</span> : null}
                                </div></>
                        }
                        <div className="formInputs mt-3">
                            <label htmlFor='image'>Image</label>
                            <input id="image" type="file" onChange={(e) => setImageFile(e.target.files[0])} />
                            {errors.ImageUrl != null ? <span className='text-danger'>{errors.ImageUrl}</span> : null}
                        </div>

                        <div className="addButton d-flex justify-content-center mt-5 mb-5">
                            <button type='submit' className='btn btn-primary ps-5 pe-5'>Add</button>
                        </div>
                    </form>
                    {window.location.pathname=="/profile/createkatib" && submit && <span>Katib ugurla elave edili</span>}
                    {window.location.pathname=="/profile/createteacher" && submit && <span>Muellim ugurla elave edili</span>}
                </div>
            </div>


        </>
    )
}