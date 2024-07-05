import React from 'react'
import './sectionOne.css'
import dish1 from '../../public/cusine.png'
import dish2 from '../../public/cusine.png'
import dish3 from '../../public/pngwing.png'
import dish4 from '../../public/pngwingTwo.png'
import dish5 from '../../public/pngwingThree.png'
import dish6 from '../../public/pngwingFour.png'
import dish7 from '../../public/pngwingFive.png'
import link from '../../public/link.png'
import Image from 'next/image'

const sectionOne = () => {
    const list = [dish1,dish2,dish3,dish4,dish5,dish6,dish7];
  return (
    <div className='sectionContainer'>
        <h1 className="headerContainer">What's on your mind?</h1>
        <div className="sectionListItems">{list.map((lists,index)=><div className='imgContainer' key={index}><Image src={lists} alt="#" width={150} height={150} className='Image -translate-y-4'/></div>)}</div>
    </div>
  )
}

export default sectionOne