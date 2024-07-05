import React from 'react'
 import './navBar.css'
 import swiggy from '../../public/swiggy.png'
 import Bag from '../../public/bag.png'
 import Search from '../../public/search.png'
 import Offer from '../../public/discount.png'
 import Help from '../../public/donut-chart.png'
 import SignIn from '../../public/people.png'
 import Cart from '../../public/shopping-bag.png'
 import Image from 'next/image'

const navBar = () => {
  return (
    <div className= "navContainer">
        <div className="leftNav">
          <div className='navlogo'><Image src={swiggy} alt="" id='swiggyLogo' /></div>
          <div className='leftText'><span>others</span></div>
        </div>
        <div className="rigthNav">
          <div className='rigthNavContainer'><div className='navIcon'><Image src={Bag} alt="" /></div><span>swiggy<span className='spanTwo'>corporate</span></span></div>
          <div className='rigthNavContainer'><div className='navIcon'><Image src={Search} alt="" /></div><span>Search</span></div>
          <div className='rigthNavContainer'><div className='navIcon'><Image src={Offer} alt="" /></div><span>offers</span></div>
          <div className='rigthNavContainer'><div className='navIcon'><Image src={Help} alt="" /></div><span>Help</span></div>
          <div className='rigthNavContainer'><div className='navIcon'><Image src={SignIn} alt="" /></div><span>Sign<span className='spanTwo'>in</span></span></div>
          <div className='rigthNavContainer'><div className='navIcon'><Image src={Cart} alt=""/></div><span>cart</span></div>
          </div>
    </div>
  )
}

export default navBar