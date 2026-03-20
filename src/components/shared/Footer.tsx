import React from 'react'
import NavBtn from '../ui/NavBtn'
import SocialIcons from '../ui/SocialIcons'
import Image from 'next/image'

const NavItems = [
  {title: 'Rentals', path: '/rentals'}, 
  {title: 'For Sale', path: '/for_sale'}, 
  { title: 'Blogs', path: '/blogs' },
  { title: 'About Us', path: '/about_us' },
  { title: 'Privacy Policy', path: '/privacy_policy' },
]

const Footer = () => {
  return (
    <footer className='mt-auto flex flex-col items-center pb-15 bg-primary gap-6'>
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
        <nav className='flex-1 flex items-center justify-center gap-8'>
        {
          NavItems.map((item, index) => (
            <NavBtn key={index} title={item.title} path={item.path}/>
          ))
        }
        </nav>
        <SocialIcons/>
      </div>
      <hr className='text-secondary w-4xl'/>
      <p>Copyright 2025 &copy; CozyNest Inc.</p>
    </footer>
  )
}

export default Footer