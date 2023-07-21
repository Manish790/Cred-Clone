import React from 'react'
import BottomBanner from '../../Assets/bottom.jpg';
import BottomBannerMobile from '../../Assets/bottom-mobile.jpg';
const Bottom = () => {
  return (
    <div className='bottom-wrapper'>
    <div className='non-mobile'>
        <img src={BottomBanner} />
    </div>
    <div className='only-mobile'>
        <img src={BottomBannerMobile} />
    </div>
</div>
  )
}

export default Bottom;