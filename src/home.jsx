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
import Grad from './grad'
import Reveal from './Reveal'
function Home() {
  
  return (
    <div className=" w-[100%] relative bg-gray-900 ">
      <div className="cont h-[100%]   sm:px-20 px-10 w-[100%] bg-gray-900 ">
        <Nav />
        <Grad />
        <Reveal>
          <Intro />
        </Reveal>
        <Reveal>
          <Count />
        </Reveal>
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <Info />
        </Reveal>
        <Reveal>
          <Deal />
        </Reveal>
        <Reveal>
          <People />
        </Reveal>
        <Reveal>
          <Brands />
        </Reveal>
        <Reveal>
          <Try />
        </Reveal>
      </div>
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}

export default Home
