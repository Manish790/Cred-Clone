import React from 'react'
import About from '../Components/About/index';
import Bottom from '../Components/Bottom/index';
import Footer from '../Components/Footer/index';
import AppRating from '../Components/AppRating/index';
import CredStory from '../Components/CredStory';
// import MobileScroll from '../Components/MobileScroll/index';
import WindowPeek from '../Components/WindowPeek/index';
import Brands from '../Components/Brands/index';
import CredSecurity from '../Components/CredSecurity/index';
import CredExp from '../Components/CredExp/index';
import FeelSpecial from '../Components/FeelSpecial/index'
import HeroSection from '../Components/HeroSection/index'
import Header from '../Components/common/Header';
import ProductShowcase from '../Components/ProductShowcase/index';
const Home = () => {
  return (
  <>
  <Header/>
  <HeroSection />
  <ProductShowcase/>
  <FeelSpecial/>
  <Brands/>
  <CredExp/>
  {/* <MobileScroll/> */}
  <div className='non-mobile'>
  <WindowPeek/>
  </div>

  <CredSecurity/>
  <CredStory/>
  <AppRating/>
  <About/>
  <Bottom/>
  <Footer/>

  </>
  );
};
  

export default Home