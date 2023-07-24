import Image from 'next/image'
import React from 'react'
import { featuredProducts } from '../../data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500 no-scrollbar  '>
        <div className='w-max flex '>
         {featuredProducts.map(item=>(
            <div className='w-screen h-[70vh] flex flex-col items-center justify-around p-4 
            hover:bg-fuchsia-200 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]' key={item.id}>
               {item.img && <div className='relative flex flex-1 w-full transition-all ease-in-out hover:rotate-[90deg] duration-500'>
                    <Image src={item.img} alt="imge" fill  className='object-contain'/>
                </div>}
                <div className='flex-1 flex flex-col gap-3 items-center justify-center mt-3 text-center'>
                    <h1 className='text-xl font-bold uppercase'>{item.title}</h1>
                    <p className='px-8 xl:text-xl '>{item.desc}</p>
                    <span className='text-xl font-bold'>${item.price}</span>
                    <button className='bg-red-500 text-white p-2 rounded-[20px] w-[100px] lg:w-[200px]'>order</button>
                </div>
            </div>
           )) }
        </div>
    </div>
  )
}

export default Featured