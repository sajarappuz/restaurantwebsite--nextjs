"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id:1,
            title: "Let's Find the Perfect Flavour to Eat",
            image: "/sliderimage1-transformed.png",
        },
        {
            id:2,
            title: "Gather To Eat Foods and Have Memories",
            image: "/slimage2-transformed.png"
        },
        {
            id:3,
            title: "Crunchy Foods for Foodies..!!",
            image: "/slimage3-transformed.png",
        },
    ]

       useEffect(()=>{
        const Interval = setInterval(()=>{
            setCurrentSlide((prev)=> (prev === data.length - 1? 0 :  prev + 1))
        },2000)
        return ()=>clearInterval(Interval)
    },[])

  return (
     
     
    <div className='flex flex-col-reverse h-[calc(100vh-6rem)]  md:flex-row'>
        
        <div className='flex-1 flex items-center justify-center flex-col gap-7 text-gray-500 bg-slate-200 '>
            <h1 className='text-3xl text-center uppercase p-4  font-bold xl:text-6xl md:p-10'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-gray-500 text-white p-4 rounded-[20px] text-xl'>Order Now</button>
        </div>
        <div className='flex-1 w-full relative bg-slate-200'>
            <Image src={data[currentSlide].image} alt="slider1 " fill className='object-contain'/>
        </div>
    </div>
  )
}

export default Slider