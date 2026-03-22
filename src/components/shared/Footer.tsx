
import SocialIcons from '../ui/SocialIcons'
import Image from 'next/image'
import NavBar from '../ui/NavBar'

const Footer = () => {
  return (
    <footer className='mt-auto flex flex-col items-center pb-15 bg-cyan-300 text-primary dark:bg-cyan-800 dark:text-white gap-6'>
      <div className='flex justify-between items-center pb-6 pt-15 px-15 w-full'>
        <div className='flex flex-col items-start justify-start gap-4'>
          <div className='flex'>
            <Image src="/assets/light_logo.png" alt='Logo Image of Cozy Nest Company' width={60} height={52} className='block dark:hidden'/>
            <Image src="/assets/dark_logo.png" alt='Logo Image of Cozy Nest Company' width={60} height={52} className='hidden dark:block'/>
          </div>
          <p className='font-normal'>No mistakes, <br/> 
            just happy little homes
          </p>
        </div>
        <NavBar />
        <SocialIcons/>
      </div>
      <hr className='text-secondary w-4xl'/>
      <p>Copyright 2025 &copy; CozyNest Inc.</p>
    </footer>
  )
}

export default Footer