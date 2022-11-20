import React from 'react';
import Navbar from '../../Navbars/Navbar';
import Footer from "../../Footer/Footer";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function FamousGraduates() {
  const [graduates, setGraduates] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7049/api/graduate").then((response) => setGraduates(response.data));
  }, []);
  return (
    <>
      <Navbar />
      <main style={{padding:"50px 0px 150px 0px"}}>
        <section className='famousGraduates'>
          <div className="container">
            <div className="row">
              <div className="title d-flex justify-content-center">
                <h2>Tanınmış Məzunlar</h2>
              </div>
            </div> <div className="row">
              {graduates.map((graduate) => {
                return (
                  <div key={graduate.id} className="col-md-6 mt-5 mb-5">
                    <div className="myCard d-flex">
                      <div className="leftSide">
                        <img style={{ width: "180px", height: "200px" }} src={graduate.imageName} alt={graduate.name} />
                      </div>
                      <div className="rightSide ms-3">
                        <div className="title">
                          <h2>{graduate.name}</h2>
                          <h5>{graduate.startEducation}-{graduate.startEducation + 4}</h5>
                        </div>
                        <div className="content">
                          <span style={{ fontSize: "22px" }}>{graduate.info}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
