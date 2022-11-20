import React from 'react';
import Studentfilter from '../../Filter/Studentfilter';
import ProfileLeftNavbar from '../../Navbars/ProfileLeftNavbar';
import ProfileNavbar from '../../Navbars/ProfileNavbar';

export default function StudentProfile() {
    return (
        <>
            <ProfileNavbar />
            <section className='stprofile'>
                <div className="container stprofile">
                    <div className="row">
                        <div className="col-2">
                            <ProfileLeftNavbar />
                        </div>
                        <div className="col-10">
                            <Studentfilter />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
