import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faCircleInfo, faL } from '@fortawesome/free-solid-svg-icons';
import { activateJournal, activateSubject } from '../../Redux/features/Navbar/CenterNavSlice';
import { setTeachers, activateTeacherTab, activateJournalTab, activateKollekvumTab, activateSerbestIsTab } from '../../Redux/features/Profile/StudentProfileSlice';
import TeacherTab from './TeacherTab';
import JournalTab from './JournalTab';
import KollekvumTab from './KollekvumTab';
import SerbestIsTab from './SerbestIsTab';
export default function Studentfilter() {
    var isActiveSubject = useSelector((state) => state.centerNav.isActiveSubject);
    var user = useSelector((state) => state.user.user);
    var teacherTab = useSelector((state) => state.studentProfile.teacherTab);
    var journalTab = useSelector((state) => state.studentProfile.journalTab);
    var kollekvumTab = useSelector((state) => state.studentProfile.kollekvumTab);
    var serbestIsTab=useSelector((state)=>state.studentProfile.serbestIsTab);
    var dispatch = useDispatch();
    var isActiveJournal = useSelector((state) => state.centerNav.isActiveJournal);
    const [faculty, setFaculty] = useState({});
    const [courses, setCourses] = useState([]);
    const [specialty, setSpecialty] = useState({});
    const [subjects, setSubjects] = useState([]);
    const [courseId, setCourseId] = useState(1);
    const [groupId, setGroupId] = useState(0);
    const [subjectId, setSubjectId] = useState(0);
    const [group, setGroup] = useState({});
    const [semesterId, setSemesterId] = useState(1);
    useEffect(() => {
        axios.get(`https://localhost:7049/api/faculty/getbyid/${user.UserID}`).then((response) => { setFaculty(response.data) });
        axios.get("https://localhost:7049/api/course").then((response) => setCourses(response.data));
        axios.get(`https://localhost:7049/api/specialty/getforuserid/${user.UserID}`).then((response) => setSpecialty(response.data));
        axios.get(`https://localhost:7049/api/group/getforstudentid/${user.UserID}`).then((response) => { setGroup(response.data); setGroupId(response.data.id) });
    }, []);
    useEffect(() => {
        if (specialty.id != null && courseId != 0) {
            axios.get(`https://localhost:7049/api/subject/forspecialtyid/${specialty.id}/${courseId}/${semesterId}/${groupId}`).then((response) => setSubjects(response.data))
        }
    }, [specialty, courseId,semesterId]);
    useEffect(()=>{
        return ()=>{
            dispatch(activateTeacherTab(false))
            dispatch(activateJournalTab(false))
            dispatch(activateKollekvumTab(false))
            dispatch(activateSerbestIsTab(false))
        }
    },[]);
    // function onFacultyChange(e) {
    //     axios.get(`https://localhost:7049/api/specialty/${e.target.value}`).then((response) => setSpecialities(response.data));
    // }

    function onTeacherHandler(e) {
        dispatch(activateTeacherTab(!teacherTab))
        dispatch(activateJournalTab(false));
        dispatch(activateKollekvumTab(false))
        axios.get(`https://localhost:7049/api/teacher/getteachers/${subjectId}/${groupId}`).then((response) => {dispatch(setTeachers(response.data));})
    }
    function onJournalHandler(e) {
        dispatch(activateJournalTab(!journalTab))
        dispatch(activateTeacherTab(false));
        dispatch(activateKollekvumTab(false))
        dispatch(activateSerbestIsTab(false))

    }
    function onKollekvumHandler(e) {
        dispatch(activateKollekvumTab(!kollekvumTab))
        dispatch(activateJournalTab(false))
        dispatch(activateTeacherTab(false))
        dispatch(activateSerbestIsTab(false))
    }
    function onSerbestIsHandler(e){
        dispatch(activateSerbestIsTab(!serbestIsTab))
        dispatch(activateJournalTab(false))
        dispatch(activateTeacherTab(false));
        dispatch(activateKollekvumTab(false));
    }
    return (
        <>
            <div className="image">
            </div>
            <div className={`datas d-flex ${isActiveSubject ? undefined : "d-none"}`}>
                <div className="col-4 left">
                    <div className="filter">
                        <form>
                            <div className="formInputs mb-3" >
                                <label htmlFor="semester" className='mb-2'>Semester</label>
                                <select id="semester" onChange={(e) => setSemesterId(e.target.value)}>
                                    <option value="1">Payiz</option>
                                    <option value="2">Yaz</option>
                                </select>
                            </div>
                            <div className="formInputs mb-3">
                                <label htmlFor="fakulty" className='mb-2'>Fakültə</label>
                                <select id="faculty" value={faculty.id}  >
                                    <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                                </select>
                            </div>
                            <div className="formInputs mb-3">
                                <label htmlFor="course" className='mb-2'>Kurs</label>
                                <select id="course" onChange={(e) => { setCourseId(e.target.value); }}>
                                    {courses.map((course) => {
                                        return (
                                            <option key={course.id} value={course.id} >{course.courseYear}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="formInputs mb-3">
                                <label htmlFor="group" className='mb-2'>Qrup</label>
                                <select id="group" >
                                    <option value={group.id}>{group.name}</option>
                                </select>
                            </div>
                            <div className="formInputs mb-3">
                                <label htmlFor="specialty" className='mb-2'>Ixtisas</label>
                                <select id="specialty" value={specialty.id} >
                                    <option value={specialty.id}>{specialty.name}</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-8">
                    <div className="results d-flex flex-wrap">
                        {subjects.map((subject => {
                            return (
                                <div key={subject.id} className="col-4 ">
                                    <div className="myCard">
                                        <div className="myCardBody mt-2">
                                            <h5 className='text-light'><FontAwesomeIcon className='text-light ms-4 mt-2 me-2' icon={faCircleInfo} />Fənn:{subject.name}</h5>
                                        </div>
                                        <div className="myCardFooter d-flex justify-content-end mt-3" >
                                            <p className='text-light me-2 mt-2' onClick={() => { dispatch(activateJournal(true)); dispatch(activateSubject(false)); setSubjectId(subject.id) }}>Fənnə daxil ol</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        }))}
                    </div>
                </div>
            </div>
            <div className={isActiveJournal ? `journal ` : 'journal d-none'}>
                <ul className='list-unstyled d-flex'>
                    <li onClick={(e) => onTeacherHandler(e)} className={teacherTab ? "active" : undefined}>Müəllimlər</li>
                    <li onClick={(e) => onJournalHandler(e)} className={journalTab ? "active" : undefined}>Elektron Jurnal</li>
                    <li onClick={(e) => onKollekvumHandler(e)} className={kollekvumTab ? "active" : undefined}>Kollekvumlar</li>
                    <li onClick={(e)=>onSerbestIsHandler(e)} className={serbestIsTab ? "active" : undefined}>Sərbəst işlər</li>
                    <li>İmtahan</li>
                </ul>
                <TeacherTab />
                <JournalTab />
                <KollekvumTab subjectid={subjectId} />
                <SerbestIsTab subjectId={subjectId}/>

            </div>
        </>
    )
}
