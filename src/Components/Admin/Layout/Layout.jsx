import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect,useNavigate} from 'react-router-dom';
import Register from '../../Account/Register';
import LayoutNavbar from '../../Navbars/LayoutNavbar';
import Profile from '../../Page/Profile/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders,faNewspaper,faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CreateForm from '../../Create/CreateForm';
import Datas from './Datas';
import { useEffect } from 'react';
import TeacherDetail from './Teacher/TeacherDetail';
import axios from 'axios';
import { useState } from 'react';
import Dekans from '../../Page/Dekan/Dekans';
import DekansDatas from '../Dekan/DekansDatas';
import StudentDatas from '../Student/StudentDatas';
import DekanCreate from '../Dekan/DekanCreate';
import FacultyDatas from '../Faculty/FacultyDatas';
import SpecialtyDatas from '../Specialty/SpecialtyDatas';
import FacultyCreate from '../Faculty/FacultyCreate';
import CreateSpecialty from '../Specialty/CreateSpecialty';
import GroupDatas from '../Groups/GroupDatas';
import GroupCreate from '../Groups/GroupCreate';
export default function Layout(props) {
    const{htmlCodes}=props;
    var user=useSelector(state=>state.user.user);
    var navigate=useNavigate();
    const[rektorTab,activateRektorTab]=useState(false);
    const[katibTab,activateKatibtab]=useState(false);
    const[teacherTab,activateTeacherTab]=useState(false);
    const[studentTab,activateStudentTab]=useState(false);
    const[dekanTab,activateDekanTab]=useState(false);
    useEffect(()=>{
        if(user==null){
            return navigate("/notfound");
        }
        if(user.role=="Telebe"){
            axios.get(`https://localhost:7049/api/Student/GetAppUserId/${user.UserID}`).then();
            return navigate(`/profile/studentprofile/${user.UserID}`);
        }
        if(user.role=="Muellim"){
            return navigate("/profile/teacherprofile");
        }
    },[]);
  return (
    <section className='layout'>
        <div className="row g-0">
            <div className="col-2" style={{position:"fixed",height:"100%"}} >
                <div className="title d-flex justify-content-center align-items-center">
                    <h3 style={{cursor:"pointer"}}>Profile</h3>
                </div>
                <div className="options ">
                    {user !=null && user.role=="Katib" &&  <ul className='list-unstyled'>
                        <Link className='text-decoration-none text-light' to="/profile"><li className='active' onClick={(e)=>{let active=document.querySelector("li.active");active.classList.remove("active");e.target.classList.add("active")}} ><FontAwesomeIcon icon={faUser} className="me-2 "/>Profile</li></Link>
                        <Link className='text-decoration-none text-light' to="/profile/sliders"><li onClick={(e)=>{let active=document.querySelector("li.active");active.classList.remove("active");e.target.classList.add("active")}}><FontAwesomeIcon icon={faSliders} className="me-2"  />Sliders</li></Link>
                        <Link className='text-decoration-none text-light' to="/profile/news"> <li onClick={(e)=>{let active=document.querySelector("li.active");active.classList.remove("active");e.target.classList.add("active")}}><FontAwesomeIcon icon={faNewspaper} className="me-2"/>News</li></Link>
                        <Link className='text-decoration-none text-light' to="/profile/faculties"> <li onClick={(e)=>{let active=document.querySelector("li.active");active.classList.remove("active");e.target.classList.add("active")}}>Faculties</li></Link>
                        <Link className='text-decoration-none text-light' to="/profile/specialities"> <li onClick={(e)=>{let active=document.querySelector("li.active");active.classList.remove("active");e.target.classList.add("active")}}>Specailities</li></Link>
                        <Link className='text-decoration-none text-light' to="/profile/groups"> <li onClick={(e)=>{let active=document.querySelector("li.active");active.classList.remove("active");e.target.classList.add("active")}}>Groups</li></Link>
                    </ul> }
                    {user!=null && user.role=="Rektor" && <ul className='list-unstyled'>
                        <Link className='text-decoration-none text-light' to="/profile"><li className={rektorTab ? "active" : null} onClick={()=>{activateRektorTab(true);activateKatibtab(false);activateStudentTab(false);activateTeacherTab(false);activateDekanTab(false)}}   ><FontAwesomeIcon icon={faUser} className="me-2 "/>Profile</li></Link>
                        <Link className='text-decoration-none text-light' to="/profile/katibs"><li className={katibTab ? "active" : null} onClick={()=>{activateKatibtab(true);activateRektorTab(false);activateStudentTab(false);activateTeacherTab(false);activateDekanTab(false)}} >Katibs</li></Link>
                        <Link className='text-decoration-none text-light' to="/profile/teachers"><li className={teacherTab ? "active" : null} onClick={()=>{activateTeacherTab(true);activateRektorTab(false);activateStudentTab(false);activateKatibtab(false);activateDekanTab(false)}}>Teachers</li></Link>
                        <Link className='text-decoration-none text-light' to="/profile/students"><li className={studentTab ? "active" : null} onClick={()=>{activateStudentTab(true);activateRektorTab(false);activateKatibtab(false);activateTeacherTab(false);activateDekanTab(false)}}>Students</li></Link>
                        <Link className='text-decoration-none text-light' to="/profile/dekans" ><li className={dekanTab ? "active" : null} onClick={()=>{activateDekanTab(true);activateRektorTab(false);activateKatibtab(false);activateTeacherTab(false);activateStudentTab(false)}}>Dekans</li></Link>
                    </ul> }
                </div>
            </div>
            <div className="col-10 " style={{marginLeft:"280px"}} >
                <LayoutNavbar/>
                {window.location.pathname=="/profile" && <Profile/> }
                {window.location.pathname=="/profile/sliders" ? <Datas/> : null}
                {window.location.pathname=="/profile/news" ? <Datas/> : null}
                {window.location.pathname=="/profile/katibs"  && <Datas/>}
                {window.location.pathname=="/profile/teachers"  && <Datas/>}
                {window.location.pathname=="/profile/sliders/createslider" ? <CreateForm/> : null}
                {window.location.pathname=="/profile/news/createnews" ? <CreateForm/> : null}
                {window.location.pathname=="/profile/katibs/createkatib" ? <Register/> : null}
                {window.location.pathname=="/profile/teachers/createteacher" ? <Register/> : null}
                {window.location.pathname=="/profile/teachers/teacherdetail/:id" && <TeacherDetail/>}
                {window.location.pathname=="/profile/students" && <StudentDatas/>}
                {window.location.pathname=="/profile/dekans" && <DekansDatas/>}
                {window.location.pathname=="/profile/faculties" && <FacultyDatas/>}
                {window.location.pathname=="/profile/specialities" && <SpecialtyDatas/>}
                {window.location.pathname=="/profile/faculties/createfaculty" && <FacultyCreate/>}
                {window.location.pathname=="/profile/specialities/createspecialty" && <CreateSpecialty/>}
                {window.location.pathname=="/profile/groups" && <GroupDatas/>}
                {/* {window.location.pathname="/profile/groups/creategroups" && <GroupCreate/>} */}
                {htmlCodes}
            </div>
        </div>
    </section>
  )
}
