import React from 'react';
import ProfileLeftNavbar from '../../Navbars/ProfileLeftNavbar';
import ProfileNavbar from '../../Navbars/ProfileNavbar';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentDetail from '../Student/StudentDetail';
import { activateStuedentDetail } from "../../../Redux/features/Profile/StudentProfileSlice";
export default function TeacherProfile() {
    var dispatch = useDispatch();
    var isActiveStudentDetail = useSelector((state) => state.studentProfile.isActiveStudentDetail);
    const [teacher, setTeacher] = useState({});
    const [groups, setGroups] = useState([]);
    const [groupId, setGroupId] = useState(0);
    const [isActiveGroups, activateGroups] = useState(true);
    const [isActiveGroupDetail, activateGroupDetail] = useState(false);
    const [students, setStudents] = useState([]);
    const [studentDetail, setStudentDetail] = useState([]);
    const [subjectId, setSubjectId] = useState(0);

    useEffect(() => {
        return () => {
            dispatch(activateStuedentDetail(false))
        }
    }, []);
    // var user=localStorage.getItem("")
    var user = useSelector((state) => state.user.user);
    useEffect(() => {
        axios.get(`https://localhost:7049/api/group/getforteacherid/${user.UserID}`).then(resp => { setGroups(resp.data); });
        axios.get(`https://localhost:7049/api/teacher/getforappUserid/${user.UserID}`).then(resp => { setTeacher(resp.data) });


    }, []);
    // useEffect(() => {
    //     if (groupId != 0) {
    //         axios.get(`https://localhost:7049/api/subject/getforappuserid/${user.UserID}/${groupId}`).then(resp => { console.log(resp.data) })
    //     }


    // }, [groupId]);
    return (
        <>
            <ProfileNavbar />
            <section className='tprofile'>
                <div className="container tprofile">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mt-3">
                            <h3>Teacher Profile</h3>
                        </div>
                        <div className="col-12">
                            <img src="https://www.bridgemi.com/sites/default/files/styles/full_width_image/public/2022-10/chalkboard%20shutterstock.jpg?itok=V_JAmUSw" style={{ height: "200px", width: "100%" }} alt="just an picture" />
                        </div>
                        <div className={isActiveGroups ? `col-12 d-flex ` : 'col-12 d-none'}>
                            {groups.map((group) => {
                                return (
                                    <div key={group.id} className="col-4">
                                        <div className="myCard">
                                            <div className="myCardHeader" >
                                                <p>Qrup adı : {group.name} , </p>
                                                <p>Tələbə sayı : {group.count}</p>

                                            </div>
                                            <div className="myCardBody">
                                                <p>Fənn adı:{group.subjectName}</p>
                                            </div>
                                            <div className="myCardFooter">
                                                <p style={{ cursor: "pointer", fontSize: "22px" }} onClick={() => { setSubjectId(group.subjectId); setGroupId(group.id); axios.get(`https://localhost:7049/api/student/getforgroupid/${group.id}`).then(response => { setStudents(response.data); }); activateGroups(!isActiveGroups); activateGroupDetail(!isActiveGroupDetail); }}>Daxil ol</p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                        <div className={isActiveGroupDetail ? `col-12 ` : 'col-12 d-none'}>
                            <div className="row">
                                <div className="title d-flex justify-content-center mt-2 mb-2">
                                    <h4>Tələbələr</h4>

                                </div>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Id
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Surname
                                        </th>
                                        <th>
                                            Detallar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student) => {
                                        return (
                                            <tr key={student.id}>
                                                <td>
                                                    <p>{student.id}</p>
                                                </td>
                                                <td>
                                                    <p>{student.firstName}</p>
                                                </td>
                                                <td>
                                                    <p>{student.lastName}</p>
                                                </td>
                                                <td>
                                                    <button className='btn btn-primary' onClick={() => { dispatch(activateStuedentDetail(!isActiveStudentDetail)); activateGroupDetail(!isActiveGroupDetail); axios.get(`https://localhost:7049/api/student/getstudentdetail/${student.id}/${subjectId}`).then(response => setStudentDetail(response.data)) }}>Ətraflı</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <StudentDetail studentDetail={studentDetail} subjectId={subjectId} />

                    </div>
                </div>
            </section>

        </>
    )
}