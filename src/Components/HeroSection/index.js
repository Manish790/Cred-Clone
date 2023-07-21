import React from 'react'
import Button from '../common/index'
import './heroSection.css'
const Herosection = () => {
  return (
    <div className="hero-section-wrapper">
        <div className='flex absolute-center hero-claim-label'>
            pay credit card bill. earn guaranteed Rs.200 back.  claim now↗️</div>
        
      <div className="flex absolute-center flex-col hero-section max-width">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
}

export default Herosection