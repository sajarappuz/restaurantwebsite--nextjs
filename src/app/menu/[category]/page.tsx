import React from 'react'
import { pizzas } from '../../../../data'
import Link from 'next/link'
import Image from 'next/image'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-gray-500 '>
        {pizzas.map((item)=>(
          <Link href={`/product/${item.id}`}
          key={item.id} className='w-full h-[60vh] group border-r-2 even:bg-slate-200 border-b-2 flex flex-col justify-between border-gray-500 sm:w-1/2 md:w-1/3 p-4'
          >
            {item.img && (
            <div className='relative h-[80%] '>
              <Image src={item.img} alt="" fill className='object-contain'/>
            </div>
            )}
            <div className='flex items-center justify-between font-bold '>
              <h1 className='text-xl uppercase p-2'>{item.title}</h1>
              <h2 className='group-hover:hidden'>${item.price}</h2>
              <button className='hidden group-hover:block uppercase bg-gray-500 text-white p-2 rounded-lg'>Add to Cart</button>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default CategoryPage