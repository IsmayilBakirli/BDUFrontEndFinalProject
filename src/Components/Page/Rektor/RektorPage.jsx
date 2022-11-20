import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../Navbars/Navbar';
import Footer from '../../Footer/Footer';
import Rektor from '../../Rektor/Rektor';
export default function RektorPage() {
  var activeRektor = useSelector((state) => state.rektor.activeRektor);
  return (
    <>
      <NavBar />
      <main >
        <Rektor/>
      </main>
      <Footer />
    </>
  )
}
