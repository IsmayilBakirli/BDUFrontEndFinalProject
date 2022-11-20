import React from 'react';
import CreateForm from '../Create/CreateForm';
import Footer from '../Footer/Footer';
import Navbar from '../Navbars/Navbar';


export default function NewsCreate() {
    return (
        <section className='newsCreate'>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <CreateForm />
                </div>
            </div>
            <Footer />
        </section>
    )
}
