import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] flex items-center justify-center'>
        <div className='h-full shadow-2xl rounded-lg flex flex-col md:flex-row md:h-[90%] md:w-[70%]'>
            <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
                <Image src="/foodbg.jpg" alt='' fill className='object-cover'/>
            </div>
            <div className='p-10 flex flex-col gap-4 h-2/3 '>
              <h1 className='font-bold text-lg uppercase'>welcome</h1>
              <p>Login in to your account or create new one</p>
              <button className='flex gap-4 p-4 ring-1 ring-orange-600 rounded-lg'>
                <Image src="/google.png" width={20} alt='' height={20} className='object-contain'/>
               <span> Sign in with Google</span>
                </button>
              <button className='flex gap-4 p-4 ring-1 ring-blue-400 rounded-lg'>
                <Image src="/facebook.png" width={20} alt='' height={20} className='object-contain'/>
               <span> Sign in with Facebook</span>
                </button>
                <p className='text-sm'>Have a problem? <Link className='underline' href="/"> Contact Us</Link></p>
            </div>
        </div>
    </div>
  )
}

export default LoginPage