import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faComment, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function ProfileNavbar() {
    var user = useSelector((state) => state.user.user);
    return (
        <nav className='profile'>
            <div className="row " >
                <div className="col-7 d-flex justify-content-between">
                    <h3 className='text-light'><FontAwesomeIcon className='text-light me-2' icon={faBars} />Sistemler</h3>
                    <div className='ms-5'>
                        <Link to="/">  <img style={{ marginLeft: "80px" }} src="https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_of_Baku_State_University.png" alt="just logo" /></Link>

                        <h4 className='text-light'>Baku State University</h4>
                    </div>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <ul className='d-flex list-unstyled text-light'>
                        <li>
                            <div className="icon">
                                <FontAwesomeIcon className='ms-3' style={{ fontSize: "20px" }} icon={faEnvelope} />
                                <p >Mesajlar</p>
                            </div>
                        </li>
                        <li className='ms-3'>
                            <div className="icon">
                                <FontAwesomeIcon className='ms-3' style={{ fontSize: "20px" }} icon={faComment} />
                               <p >Forum</p>
                            </div>
                        </li>
                        <li className='ms-3'>
                            <div className="icon">
                                <FontAwesomeIcon className='ms-3' style={{ fontSize: "20px" }} icon={faBook} />
                                <p >Kitabxana</p>
                            </div>
                        </li>
                        <li className='ms-3'>
                            <div className="icon">
                                <FontAwesomeIcon className='ms-3' style={{ fontSize: "20px" }} icon={faUser} />
                                <p style={{cursor:"pointer"}}> {user.FirstName}</p>
                            </div>
                           
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
