import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-auto flex flex-col items-center pb-15 bg-accent text-text-tertiary gap-6'>
      <div className='flex justify-center items-center pb-6 pt-15 px-15 w-full'>
        <div className='flex flex-col items-center justify-start gap-4'>
          <div className='flex'>
            <Image src="/assets/light_logo.png" alt='Logo Image of Cozy Nest Company' width={60} height={52} className='block dark:hidden'/>
            <Image src="/assets/dark_logo.png" alt='Logo Image of Cozy Nest Company' width={60} height={52} className='hidden dark:block'/>
          </div>
          <p className='font-normal text-text-primary text-center'>No mistakes, <br/> 
            just happy little homes
          </p>
        </div>
      </div>
      <hr className='text-tertiary w-4xl'/>
      <p>Copyright 2025 &copy; CozyNest Inc.</p>
    </footer>
  )
}

export default Footer