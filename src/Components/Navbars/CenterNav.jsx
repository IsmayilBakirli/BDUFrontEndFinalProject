import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faGraduationCap, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';
import { visibleMenu } from '../../Redux/features/Navbar/CenterNavSlice';
import { useEffect } from 'react';
import { setUser } from '../../Redux/features/User/UserSlice';
import { useNavigate } from 'react-router-dom';
function CenterNav() {
    let isVisible = useSelector((state) => state.centerNav.isMenuVisible);
    let [size] = useWindowSize();
    let dispatch = useDispatch();
    var navigate = useNavigate();
    var user = useSelector(state => state.user.user);
    useEffect(() => {
        if (size >= 992) {
            dispatch(visibleMenu(false));
        }
    }, [size])

    return (
        <>
            <div className="col-lg-6 d-flex  align-items-center justify-content-around">
                <Link className='text-decoration-none' to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_of_Baku_State_University.png" alt="Bdu Logo" /></Link>
                <h2 className='text-light ms-5 '>Baku State University</h2>
                <p className={size >= 992 ? "menuBar d-none text-light " : "menuBar d-block text-light "}><FontAwesomeIcon className='barIcon' icon={faBars} onClick={() => { dispatch(visibleMenu(!isVisible)) }} /></p>
            </div>
            <div className={size >= 992 ? "col-lg-6 pageLinks align-items-center  " : "col-lg-6 pageLinks d-none align-items-center"} >
                <ul className="d-flex list-unstyled justify-content-between align-items-center ms-5 ">
                    <Link className="text-decoration-none" to="/"><li className='bdu' ><FontAwesomeIcon icon={faBuildingColumns} />BDU
                        <div className="bduHoverMenu d-none">
                            <ul className='list-unstyled d-inline-block'>
                                <li className='text-black main' >Haqqimizda</li>
                                <Link className='text-decoration-none' to="/history"> <li className='text-black'>Bdu-nun tarixi</li></Link>
                                <Link className='text-decoration-none' to="/rektors" ><li className='text-black'>Rektorlarimiz</li></Link>
                                <Link className='text-decoration-none' to="/education"><li className='text-black'>BDU-da Tehsil</li></Link>
                                <Link className='text-decoration-none' to="/famousGraduates"><li className='text-black'>Tanınmış məzunlar</li></Link>
                            </ul>
                            <ul className='list-unstyled d-inline-block ms-5'>
                                <li className='text-black main' >Rehberlik</li>
                                <Link className='text-decoration-none' to="/rektorpage"> <li className='text-black'>Rektor</li></Link>
                                <Link className='text-decoration-none' to="/dekans" ><li className='text-black'>Dekanlar</li></Link>              
                                <Link className='text-decoration-none' to="/prorektors"><li className='text-black'>ProRektorlar</li></Link>
                                <li className='text-black'>Elmi Sura</li>
                            </ul>
                        </div>
                    </li></Link>
                    <Link className="text-decoration-none" to="/academyic"><li className='academyc'><FontAwesomeIcon icon={faGraduationCap} />Akademik
                        <div className="academycHoverMenu d-none">
                            <ul className='list-unstyled  d-inline-block'>
                                <li className='main'>Akademik səviyyələr</li>
                                <li>Bakalavr</li>
                                <li>Magistatura</li>
                                <li>Doktarantura</li>
                            </ul>
                            <ul className='list-unstyled d-inline-block ms-5'>
                                <li className='text-black main' >Fakulte&Ixtisas</li>
                                <li className='text-black'>Fakulteler</li>
                                <li className='text-black'>Ixtisaslar</li>
                                <li className='text-black'>Semestr</li>
                            </ul>
                        </div>
                    </li></Link>
                    {window.location.pathname.includes("/login") ? null : user == null ? <Link className="text-decoration-none " to="/login"><li className='text-warning'>Login</li></Link> : <> <li className='text-warning'>{user.FirstName}</li>
                        <li className='warning' style={{ cursor: "pointer" }} onClick={() => { localStorage.setItem("token", null); dispatch(setUser(null)); navigate("/") }}>Logout</li></>}
                    {(user != null) ? window.location.pathname != "/profile" ? <Link className='text-decoration-none' to="/profile"><li>My Profile</li></Link> : null : null}
                </ul>
            </div>
            {isVisible ? <><div className='col-lg-6 bg-light menu'>
                <ul className='list-unstyled'>
                    <Link className="text-decoration-none " to="/about"><li><h3 className='mt-3'><FontAwesomeIcon icon={faBuildingColumns} />BDU Haqqinda</h3></li></Link>
                    <Link className="text-decoration-none" to="/academyic"><li><h3 className='mt-4'><FontAwesomeIcon icon={faGraduationCap} />Akademik Fealiyyetler</h3></li></Link>
                    <Link className="text-decoration-none " to="/login"><li><h3 className='mt-4'>Login</h3></li></Link>
                </ul>
            </div></> : null}
        </>
    );
}
export default CenterNav;