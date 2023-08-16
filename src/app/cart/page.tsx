import Image from 'next/image'
import React from 'react'

const Cartpage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] flex flex-col text-gray-500 lg:flex-row'>
         <div className='flex-1 p-4 flex flex-col justify-center overflow-scroll-y no-scrollbar lg:px-20'>
            <div className='flex items-center justify-between mb-4 '>
                <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
                <div>
                    <h1 className='uppercase font-bold text-xl'>silicon</h1>
                    <span>LARGE</span>
                </div>
                <h2 className='font-bold'>$34.33</h2>
                <span className='cursor-pointer'>X</span>
            </div>
            <div className='flex items-center justify-between mb-4 '>
                <Image src="/temporary/p2.png" alt='' width={100} height={100}/>
                <div>
                    <h1 className='uppercase font-bold text-xl'>silicon</h1>
                    <span>LARGE</span>
                </div>
                <h2 className='font-bold'>$34.33</h2>
                <span className='cursor-pointer'>X</span>
            </div>
            
         </div>
         <div className='flex-1 p-4 bg-gray-100 flex flex-col gap-4 justify-center lg:px-20'>
            <div className='flex justify-between'>
                <span>subtotal (3items)</span>
                <span> $78.23</span>
            </div>
            <div className='flex justify-between'>
                <span>Service Cost</span>
                <span> $00.00</span>
            </div>
            <div className='flex justify-between'>
                <span>Delivery Cost</span>
                <span className='text-green-500'> Free !</span>
            </div>
            <hr />
            <div className='flex justify-between'>
                <span>Total Cost </span>
                <span className='font-bold'>$78.23</span>
            </div>
            <button className='bg-gray-500 text-white p-3 rounded-lg w-1/2 self-end'>CHECK OUT</button>
         </div>
    </div>
  )
}

export default Cartpage