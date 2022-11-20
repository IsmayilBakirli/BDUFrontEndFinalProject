import React from 'react'
import Login from '../../Account/Login';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbars/Navbar';
export default function LoginPage() {
  return (
    <>
      <Navbar />
      <section className='login'>
        <Login />
      </section>
      <Footer/>
    </>

  )
}
