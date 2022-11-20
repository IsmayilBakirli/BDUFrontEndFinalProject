import React from 'react';
import CreateForm from '../Create/CreateForm';
import Navbar from '../Navbars/Navbar';
import Footer from '../Footer/Footer';
export default function SLiderCreate() {
    // inputs[2]="ImageName";
    return (
        <section className='sliderCreate'>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <CreateForm  />
                </div>
            </div>
            <Footer />
        </section>
    )
}
