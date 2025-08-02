import React from 'react'
import { Fassets } from '../assets/frontend_assets/assets'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={Fassets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Easy Exchange policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={Fassets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>7 Dayes Return police</p>
        <p className='text-gray-400'>We provide 7 dayes free ruturn policy</p>
      </div>
      <div>
        <img src={Fassets.support_img} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Best Customer support</p>
        <p className='text-gray-400'>We provide 24/7 customer suppourt</p>
      </div>
    </div>
  )
}

export default OurPolicy
