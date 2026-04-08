
import SocialIcons from '../ui/landing/SocialIcons'
import Image from 'next/image'
import NavBar from '../ui/landing/NavBar'

const MainFooter = () => {
  return (
    <footer className='mt-auto flex flex-col items-center pb-15 bg-accent gap-6 text-text-tertiary'>
      <div className='flex justify-between items-center pb-6 pt-15 px-15 w-full'>
        <div className='flex flex-col items-start justify-start gap-4'>
          <div className='flex'>
            <Image src="/assets/light_logo.png" alt='Logo Image of Cozy Nest Company' width={60} height={52} className='block dark:hidden'/>
            <Image src="/assets/dark_logo.png" alt='Logo Image of Cozy Nest Company' width={60} height={52} className='hidden dark:block'/>
          </div>
          <p className='font-normal text-text-primary'>No mistakes, <br/> 
            just happy little homes
          </p>
        </div>
        <div className='text-text-primary'>
          <NavBar />
        </div>
        <div className='text-primary'>
          <SocialIcons/>
        </div>
      </div>
      <hr className='text-tertiary w-4xl'/>
      <p>Copyright 2025 &copy; CozyNest Inc.</p>
    </footer>
  )
}

export default MainFooter