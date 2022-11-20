import React from 'react';
import CenterNav from './CenterNav';
function Navbar() {
    return (
        <header >
            <div className="mainNavbar"> 
                <div className="container">
                    <div className="row">
                    <CenterNav />
                    </div>
                </div>
            </div>
        </header>
  );
}

export default Navbar;