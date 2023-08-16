import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartItem from './CartItem'

const Navbar = () => {
    const user = true
  return (
    <div className='h-12 md:h-18 text-gray-800 p-4 flex justify-between items-center border-b-2 border-b-red-300 uppercase'>
         <div className='hidden ml-[10px] md:flex gap-4 flex-1'>
           <Link href="/">HomePage</Link>
           <Link href="/menu">Menu</Link>
           <Link href="/">Contact</Link>
         </div>
        <div className='text-lg font-extrabold flex-1 md:text-center'>
            <Link href="/">
              WIZZYFOODIE
            </Link>
        </div>

       {/* mobile menu  */}
       <div className="md:hidden">
        <Menu />
       </div>
       <div className='hidden md:flex gap-6 items-center justify-center flex-1'>
         {!user? (<Link href="/login">Login</Link>):
           (<Link href="/orders">Orders</Link>)}
             <CartItem/>
        
         </div>
       
    </div>
  )
}

export default Navbar