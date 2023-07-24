import Image from 'next/image'
import React from 'react'
import Countdown from './Countdown'

const Offer = () => {
  return (
    <div className='h-[90vh] flex flex-col-reverse bg-black md:flex-row'>
        <div className='flex-1 flex flex-col items-center justify-center gap-4 px-6'>
             <h1 className='text-white text-3xl md:text-5xl'
             >Zingur Burger sale..!!</h1>
             <p className='text-white text-center'>Have some burgers with these excited offers..! sale ending soon..!
             Grab it fast</p>
             <Countdown/>
             <button className='bg-red-500 text-white md:w-[200px] w-[100px] h-[30px] rounded-md'>Order Now </button>
        </div>
        <div className='relative flex-1 w-full'>
          <Image src="/offerProduct.png" alt='imEs' fill  className='object-contain' />
        </div>
    </div>
  )
}

export default Offer