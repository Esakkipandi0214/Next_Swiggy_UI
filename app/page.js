import React from 'react'
import NavBar from './api/navBar'
import SectionOne from './api/sectionOne'
import SectionTwo from './api/sectionTwo'
import SectionThree from './api/sectionThree'
import SectionFour from './api/sectionFour'
import SectionFive from './api/sectionFive'
import SectionSix from './api/sectionSix'
import SectionSeven from './api/sectionSeven'
import Footer from './api/footer'

const page = () => {
  return (
    <div className='appContainer h-full bg-white overflow-x-hidden'>
      <NavBar />
      <SectionOne/>
      <hr  className=' h-1 translate-y-8 mx-52'/>
      <SectionTwo/>
      <hr  className=' h-1 translate-y-6 mx-52'/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <Footer/>
    </div>
);
  
}

export default page