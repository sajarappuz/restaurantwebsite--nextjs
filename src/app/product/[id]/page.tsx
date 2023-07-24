import Image from 'next/image'
import React from 'react'
import { singleProduct } from '../../../../data'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen  flex flex-col justify-around text-red-500 md:flex-row'>
       {singleProduct.img && (<div className='relative'>
            <Image src={singleProduct.img} alt='' className='object-contain ' fill/>
        </div>)}
        <div>
          <h1>{singleProduct.title}</h1>
          <p>{singleProduct.desc}</p>
        </div>
    </div>
  )
}

export default SingleProductPage