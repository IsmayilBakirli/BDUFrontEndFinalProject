 import React from 'react';
import Home  from './Components/Page/Home/Home';
import LoginPage from './Components/Page/Login/LoginPage';
import Profile from './Components/Page/Profile/Profile';
import KatibPage from './Components/Page/KatibPage/KatibPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherPage from './Components/Page/Teacher/TeacherPage';
import StudentPage from './Components/Page/Student/StudentPage';
import SLiderCreate from './Components/Sliders/SLiderCreate';
import NewsCreate from './Components/News/NewsCreate';
import History from "./Components/Page/BDUHistory/History";
import Rektors from './Components/Rektor/Rektors';
import Education from './Components/Page/Education/Education';
import FamousGraduates from './Components/Page/Graduates/FamousGraduates';
import Layout from './Components/Admin/Layout/Layout';
import NotFound from './Components/Page/System/NotFound';
import EventDetails from './Components/Page/Events/EventDetails';
import NewsDetail from './Components/Page/News/NewsDetail';
import TeacherDetail from './Components/Admin/Layout/Teacher/TeacherDetail';
import StudentDatas from './Components/Admin/Student/StudentDatas';
import Register from './Components/Account/Register';
import StudentCreate from './Components/Admin/Student/StudentCreate';
import StudentProfile from './Components/Page/Student/StudentProfile';
import RektorPage from './Components/Page/Rektor/RektorPage';
import TeacherProfile from './Components/Page/Teacher/TeacherProfile';
import Dekans from './Components/Page/Dekan/Dekans';
import ProRektor from './Components/Page/ProRektor/ProRektor';
import DekansDatas from './Components/Admin/Dekan/DekansDatas';
import DekanCreate from './Components/Admin/Dekan/DekanCreate';
import FacultyDatas from './Components/Admin/Faculty/FacultyDatas';
import FacultyCreate from './Components/Admin/Faculty/FacultyCreate';
import SpecialtyDatas from './Components/Admin/Specialty/SpecialtyDatas';
import CreateSpecialty from './Components/Admin/Specialty/CreateSpecialty';
import GroupCreate from './Components/Admin/Groups/GroupCreate';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"></Route>
                <Route element={<LoginPage/>} path="/login"></Route>
                <Route element={<Layout/>} path="/profile"></Route>
                <Route element={<Layout/>} path="/profile/sliders"></Route>
                <Route element={<Layout/>} path="/profile/sliders/createslider"></Route>
                <Route element={<Layout/>} path="/profile/news"></Route>
                <Route element={<Layout/>} path="/profile/news/createnews"></Route>
                <Route element={<Layout/>} path='/profile/teachers'></Route>
                <Route element={<Layout/>} path='/profile/teachers/createteacher'></Route>
                <Route element={<NewsCreate/>} path="/profile/createnews"></Route>
                <Route element={<History/>} path="/history/"></Route>
                <Route element={<Rektors/>} path="/rektors"></Route>
                <Route element={<Education/>} path="/education"></Route>
                <Route element={<FamousGraduates/>} path="/famousGraduates"></Route>
                <Route element={<NotFound/>} path="/notfound"></Route>
                <Route element={<Layout/>} path="/profile/katibs"></Route>
                <Route element={<Layout/>} path="/profile/katibs/createkatib"></Route>
                <Route element={<EventDetails/>} path='/eventdetail/:id'></Route>
                <Route element={<NewsDetail/>} path='/newsdetail/:id'></Route>
                <Route element={<TeacherDetail/>} path='/profile/teachers/teacherdetail/:id'></Route>
                <Route element={<Layout/>} path='/profile/students'></Route>
                <Route element={<StudentCreate/>} path='/profile/students/createstudent'></Route>
                <Route element={<StudentProfile/>}  path='/profile/studentprofile/:id'></Route>
                <Route element={<RektorPage/>} path="/rektorpage"></Route>
                <Route element={<TeacherProfile/>} path="profile/teacherprofile"></Route>
                <Route element={<Dekans/>} path="/dekans"></Route>
                <Route element={<ProRektor/>} path="/prorektors" ></Route>
                <Route element={<Layout/>} path="/profile/dekans"></Route>
                <Route element={<DekanCreate/>} path="/profile/dekans/createdekan"></Route>
                <Route element={<Layout/>} path="/profile/faculties"></Route>
                <Route element={<Layout/>} path="/profile/faculties/createfaculty"></Route>
                <Route element={<Layout/>} path="/profile/specialities"></Route>
                <Route element={<Layout/>} path="/profile/specialities/createspecialty"></Route>
                <Route element={<Layout/>} path="/profile/groups"></Route>
                <Route element={<GroupCreate/>} path="/profile/groups/creategroups"></Route>
                <Route element={<TeacherProfile/>} path="/profile/teacherprofile"></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;