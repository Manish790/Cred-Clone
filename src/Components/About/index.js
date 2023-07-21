import React from 'react'
import './about.css';
import About1 from '../../Assets/about-1.jpg';
import About2 from '../../Assets/about-2.jpg';
import About3 from '../../Assets/about-3.jpg';
import MobAbout1 from '../../Assets/about-mobile-1.jpg';
import MobAbout2 from '../../Assets/about-mobile-2.jpg';
const About = () => {
  return (
    <>
    <div className='non-mobile banners'>
        <img src={About1}/>
        <img src={About2}/>
        <img src={About3}/>

    </div>
    <div className='only-mobile banners'>
        <img src={MobAbout1}/>
        <img src={MobAbout2}/>
        

    </div>
    </>
  )
}

export default About