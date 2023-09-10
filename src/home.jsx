import React from 'react'
import './App.css'
import Nav from './nav/navd'
import Intro from './intro'
import Count from './count'
import Stats from './stats'
import Info from './info'
import Deal from './deal'
import People from './testimonials'
import Brands from './brands'
import Try from './tryout'
import Footer from './Footer'
function Home() {
  
  return (
    <div className=" w-[100%] bg-gray-900 ">
      <div className="cont h-[100%]  md:px-20 sm:px-12 px-10 w-[100%] bg-gray-900 ">
        <Nav />
        <Intro />
        <Count />
        <Stats />
        <Info />
        <Deal />
        <People />
        <Brands />
        <Try />
      </div>
        <Footer />
    </div>
  );
}

export default Home
