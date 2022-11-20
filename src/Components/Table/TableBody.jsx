import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TableBody() {
    var katibs = useSelector(state => state.katib.katibs);
    var sliders = useSelector(state => state.sliders.sliders);
    var news = useSelector(state => state.news.news);
    var teachers = useSelector(state => state.teacher.teachers);
    return (
        <>

            {window.location.pathname == "/profile/katibs" && katibs.map((katib) => {
                return (
                    <tr key={katib.id}>
                        <td>
                            <img src={katib.imageUrl} style={{height:"150px",width:"150px",borderRadius:"50%",borderRadius:"50%"}}  alt="katib image" />
                        </td>
                        <td >
                            <p className='mt-5'>{katib.firstName}</p>
                        </td>
                        <td >
                            <p className='mt-5'>{katib.userName}</p>
                        </td>
                        <td >
                            <p className='mt-5'>{katib.email}</p>
                        </td>
                        <td className='details' >
                            <p className="details">
                                <button className='btn btn-danger mt-5 ms-3'>Update</button>
                                <button className='btn btn-warning mt-5 ms-3'>Delete</button>
                                <button className='btn btn-primary mt-5 ms-3'>Detail</button>
                            </p>

                        </td>
                    </tr>
                )
            })}
            {window.location.pathname == "/profile/sliders" && sliders.map((slider) => {
                return (
                    <tr key={slider.id}>
                        <td style={{ width: "200px" }}>
                            <img className='mt-5' style={{ borderRadius: "50%", height: "100px", width: "100px" }} src={slider.imageName} alt="SLiderImage" />
                        </td>
                        <td style={{ width: "200px" }}>
                            <p className='mt-5'>{slider.title}</p>
                        </td>
                        <td style={{ width: "200px" }}>
                            <p className='mt-5'>{slider.content}</p>
                        </td>
                        <td style={{ width: "200px" }} className="details">
                            <p >                            <button className='btn btn-danger mt-5 ms-3 '>Update</button>
                                <button className='btn btn-warning mt-5 ms-3'>Delete</button>
                                <button className='btn btn-primary mt-5 ms-3'>Detail</button></p>
                        </td>
                    </tr>
                )
            })}
            {window.location.pathname == "/profile/news" && news.map((news1) => {
                return (
                    <tr key={news1.id}>
                        <td style={{ width: "200px" }}>
                            {news1.imageNames.map((imageName) => {
                                return (
                                    <img className='mt-5' style={{ borderRadius: "50%", height: "100px", width: "100px" }} src={imageName} alt="SLiderImage" />
                                )
                            })}
                        </td>
                        <td style={{ width: "200px" }}>
                            <p className='mt-5'>{news1.title}</p>
                        </td>
                        <td style={{ width: "200px" }}>
                            <p className='mt-5'>{news1.content}</p>
                        </td>
                        <td style={{ width: "200px" }} className="details">
                            <p>                           <button className='btn btn-danger mt-5 ms-3 '>Update</button>
                                <button className='btn btn-warning mt-5 ms-3'>Delete</button>
                                <button className='btn btn-primary mt-5 ms-3'>Detail</button></p>
                        </td>
                    </tr>
                )
            })}

            {window.location.pathname == "/profile/teachers" && teachers.map((teacher) => {
                return (
                    <tr key={teacher.id}>
                        <td style={{ width: "200px" }}>
                            <img style={{height:"150px",width:"150px",borderRadius:"50%",borderRadius:"50%"}} src={teacher.imageUrl} alt="just an teacher image" />
                        </td>
                        <td style={{ width: "200px" }}>
                            <p className='mt-5'>{teacher.firstName}</p>
                        </td>
                        <td style={{ width: "200px" }}>
                            <p className='mt-5'>{teacher.userName}</p>
                        </td>
                        <td style={{ width: "200px" }}>
                            <p className='mt-5'>{teacher.email}</p>
                        </td>
                        <td style={{ width: "250px" }} className="details">
                            <p ><button className='btn btn-danger mt-5 ms-3 '>Update</button>
                                <button className='btn btn-warning mt-5 ms-3'>Delete</button>
                                <Link to={{ pathname: `/profile/teachers/teacherdetail/${teacher.id}` }} ><button className='btn btn-primary mt-5 ms-3'>Detail</button></Link></p>
                        </td>
                    </tr>
                )
            })}

        </>
    )
}
