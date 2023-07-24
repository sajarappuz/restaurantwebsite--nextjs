import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import Featured from '@/components/featured'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-white'>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}
