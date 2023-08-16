import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-gray-500 flex items-center justify-between '>
      <Link href="/" className='font-extrabold text-lg'>WIZZYFOODIE</Link>
      <p>All Rights Reserved &copy; 2023</p>
    </div>
  )
}

export default Footer