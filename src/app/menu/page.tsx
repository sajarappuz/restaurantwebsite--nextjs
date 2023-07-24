import React from 'react'
import { menu } from '../../../data'
import Link from 'next/link'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center'>
       {menu.map((category)=>(
        <Link href={`/menu/${category.slug}`} key={category.id}
         className='w-full h-1/3 bg-cover p-8 md:h-[70%]'
        style={{backgroundImage:`url(${category.img})`}}>
          <div className={`text-${category.color}`}>
            <h1 className='uppercase font-bold text-2xl'>{category.title}</h1>
            <p className='font-sm my-6'>{category.desc}</p>
            <button className={`hidden xl:block bg-${category.color} text-${category.color === "black"? "white" : "red-500"} px-3 py-2 rounded-lg`}>Explore</button>
          </div>
        </Link>
       ))}
    </div>
  )
}

export default MenuPage