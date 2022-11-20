import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSliders } from '../../../Redux/features/Sliders/SliderSlice';
import { setKatib } from '../../../Redux/features/Katib/KatibSlice';
import { setNews } from "../../../Redux/features/News/News";
import { setTeachers } from "../../../Redux/features/Teacher/TeacherSlice";
import { Link } from 'react-router-dom';
import TableHead from '../../Table/TableHead';
import TableBody from '../../Table/TableBody';
export default function Datas(props) {
    var token = localStorage.getItem("token");
    var dispatch = useDispatch();
    useEffect(() => {

        if (window.location.pathname == "/profile/sliders") {
            axios.get("https://localhost:7049/api/slider").then((response) => { dispatch(setSliders(response.data)); }).catch((err) => console.log(err))
        }
        if (window.location.pathname == "/profile/news") {
            axios.get("https://localhost:7049/api/news/").then((response) => { dispatch(setNews(response.data)); }).catch((err) => console.log(err))
        }
        if (window.location.pathname == "/profile/katibs") {
            axios.get("https://localhost:7049/api/katib/get", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => { dispatch(setKatib(response.data)) }).catch((err) => console.log(err))
        }
        if (window.location.pathname == "/profile/teachers") {
            axios.get("https://localhost:7049/api/teacher/get", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => { dispatch(setTeachers(response.data)) }).catch((err) => console.log(err))
        }
    }, []);
    return (
        <>
            <div >
                <div className="container">
                    <div className="row mt-3 align-items-center" style={{ backgroundColor: "red", height: "40px", borderRadius: "15px" }}>
                        {window.location.pathname == "/profile/sliders" ? <span className='text-light' style={{ fontSize: "20px" }}>Sliderler</span> : null}
                        {window.location.pathname == "/profile/news" ? <span className='text-light' style={{ fontSize: "20px" }}>Xeberler</span> : null}
                        {window.location.pathname == "/profile/katibs" && <span className='text-light' style={{ fontSize: "20px" }}>Katibler</span>}
                        {window.location.pathname == "/profile/teachers" && <span className='text-light' style={{ fontSize: "20px" }}>Müəllimlər</span>}
                    </div>
                    <div className="row ">
                        <div className="button d-flex justify-content-end mt-4">
                            {window.location.pathname == "/profile/sliders" ? <Link to="/profile/sliders/createslider"><button className='btn btn-success'>Create</button></Link> : null}
                            {window.location.pathname == "/profile/news" ? <Link to="/profile/news/createnews"><button className='btn btn-success'>Create</button></Link> : null}
                            {window.location.pathname == "/profile/katibs" && <Link to="/profile/katibs/createkatib"><button className='btn btn-success'>Create</button></Link>}
                            {window.location.pathname == "/profile/teachers" && <Link to="/profile/teachers/createteacher"><button className='btn btn-success'>Create</button></Link>}
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <table className='styled-table'>
                                <thead>
                                    <TableHead />
                                </thead>
                                <tbody>
                                    <TableBody />
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
