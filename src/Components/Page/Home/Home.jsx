import React from 'react';
import Navbar from '../../Navbars/Navbar';
import Slider from '../../Sliders/Slider';
import News from '../../News/News';
import Discover from '../../DIscover/Discover';
import Studying from '../../Studying/Studying';
import Footer from '../../Footer/Footer';
import Rektor from '../../Rektor/Rektor';
import Info from '../../Infos/Info';
import Prides from '../../Prides/Prides';
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Slider />
        <Rektor/>
        <Discover/>
        <News />
        <Prides/>
      </main>
      <Footer/>
    </>
  );
}
export default Home;