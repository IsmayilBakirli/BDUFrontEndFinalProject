import React from 'react';
import { Link } from 'react-router-dom';
export default function LayoutNavbar() {
  return (
    <div className='layoutNav'>
      <div className="row g-0">
        <div className="header d-flex" >
          <h2 className='text-light '>BDU</h2>
          <Link to="/"> <img  src="https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_of_Baku_State_University.png" alt="Bdu Logo" /></Link>
        </div>
      </div>
    </div>
  )
}
