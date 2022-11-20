import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setDiscover } from '../../Redux/features/Discover/DiscoverSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import DiscoverItem from '../Items/DiscoverItem';

export default function Discover(props) {
    var discovers = useSelector((state) => state.discover.discovers);
    var dispatch = useDispatch();
    useEffect(() => {
        axios.get("https://localhost:7049/api/events").then((response) => dispatch(setDiscover(response.data)));
    }, []);
    return (
        <section className='discover'>
            <div className="container">
                <div className="row  title">
                    <h3 className='  text-light'>Yeniliklər və tədbirlər</h3>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <OwlCarousel
                            className='header_slider owl-carousel owl-theme '
                            items="3"
                            autoPlay={true}
                            nav={false}
                            dots={false}
                            loop={true}
                            margin={15}
                            animateIn={"bounceInRight"}
                            animateOut={"bounceOutLeft"}>
                            {discovers.map((discover) => {
                                return (
                                    <DiscoverItem key={discover.id}
                                            id={discover.id}
                                            imageName={discover.imageNames[0]}
                                            venue={discover.venue}
                                            description={discover.description}
                                        />

                                )
                            })}

                        </OwlCarousel>

                    </div>
                </div>

            </div>
        </section>
    )
}
