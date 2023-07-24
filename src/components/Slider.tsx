"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id:1,
            title: "Let's taste some unique receipies and flavours",
            image: "/Slider1.jpg",
        },
        {
            id:2,
            title: "Gathering for good foods make good memories",
            image: "/Slider3.jpg"
        },
        {
            id:3,
            title: "Have some crunchy food items you love the most",
            image: "/slider2.jpg",
        },
    ]

    // useEffect(()=>{
    //     const Interval = setInterval(()=>{
    //         setCurrentSlide((prev)=> (prev === data.length - 1? 0 :  prev + 1))
    //     },2000)
    //     return ()=>clearInterval(Interval)
    // },[])

  return (
     
     
    <div className='flex flex-col-reverse h-[calc(100vh-6rem)]  md:flex-row'>
        
        <div className='flex-1 flex items-center justify-center flex-col gap-7 text-red-500 bg-red-200 '>
            <h1 className='text-3xl text-center uppercase p-4  font-bold xl:text-6xl md:p-10'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-red-500 text-white p-4 rounded-[20px] text-xl'>Order Now</button>
        </div>
        <div className='flex-1 w-full relative'>
            <Image src={data[currentSlide].image} alt="slider1 " fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider