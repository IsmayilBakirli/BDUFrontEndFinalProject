import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Slider() {
  const [sliders, setSliders] = useState([]);
  var dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://localhost:7049/api/slider").then((response) => setSliders(response.data)).catch((ex) => console.log(ex));
  }, []);

  return (
    <section className='slider'>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
        <div className="carousel-inner">
          {sliders.map((slider) => {
            return (<div key={slider.id} >
              {
                slider.id === sliders[0].id ?
                  <div className="carousel-item active ">
                    <img className="d-block w-100" src={slider.imageName} alt="First slide" />
                    <div className="col-lg-6">
                      <h3>{slider.title}</h3>
                      <h2 >{slider.content}</h2>
                    </div>
                  </div> :
                  <div className="carousel-item  " >
                    <img className="d-block w-100" src={slider.imageName} alt="First slide" />
                    <div className="col-lg-6">
                      <h3>{slider.title}</h3>
                      <h2>{slider.content}</h2>
                    </div>

                  </div>
              }
            </div>)
          })}
        </div>
      </div>

    </section>

  )
}