import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CartItem = () => {
  return (
    <div>
        <Link href="/cart" className='flex item-center justify-center gap-3 md:gap-2'> 
        <div className='relative w-7 h-7 md:w-5 md:h-5'>
            <Image src="/cart.png" alt="" fill/>
        </div>
           <span>Cart (3)</span>
        </Link>
    </div>
  )
}

export default CartItem