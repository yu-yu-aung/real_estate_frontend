import Image from 'next/image'
import HeroText from './HeroText'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-5 bg-sky-300 '>
      <div className='col-span-2 flex items-center pl-15'>
        <HeroText/>
      </div>
      <div className='col-span-3 overflow-hidden'>
        <Image src="/assets/hero_image.png" alt='Two story house photo' width={999} height={800} />
      </div>
    </div>
  )
}

export default HeroSection