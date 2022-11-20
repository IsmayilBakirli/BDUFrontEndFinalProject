import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbars/Navbar';
import { useNavigate } from 'react-router-dom';
export default function Profile() {
  var user = useSelector((state) => state.user.user);
  return (
    <>
      <div className='profile'>
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-5">
              <div className="myCard">
                <div className="cardHeader ">
                  <div className="image d-flex justify-content-center">
                  {user !=null && user.role=="Rektor" ? <img style={{ width: "70%", borderRadius: "50%" }} src="https://tehsil.biz/uploads/news/big/news_20210929052436.jpg" alt="Just a picture" />: <img style={{ width: "70%", borderRadius: "50%" }} src="https://pbs.twimg.com/media/CsP5e21WAAAEDdx.jpg" alt="Just a picture" /> }
                  </div>

                </div>
                <div className="cardBody mt-4 d-flex justify-content-center">
                  <div className="userInfo">
                    <h4>Ad : {user != null ? user.FirstName : null}</h4>
                    <h4>Soyad : {user != null ? user.LastName : null}</h4>
                    <h4>Email : {user != null ? user.Email : null}</h4>
                    <h4>Rol : {user != null ? user.role : null}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}
