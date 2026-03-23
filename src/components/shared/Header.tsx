'use client'; 

import Image from 'next/image'
import LanguageToggle from '../ui/LanguageToggle'
import NavBar from '../ui/NavBar'
import useAuthStore from '@/stores/useAuthStore'
import Link from 'next/link';


const Header = () => { 

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn); 

  return (
    <header className="flex items-center justify-between px-15 py-4 w-full sticky top-0 z-10 bg-white dark:bg-gray-900">
      <Link href='/' className='flex shrink-0'>
        <Image src="/assets/light_logo.png" alt='Logo Image of Cozy Nest COmpany' width={60} height={52} className='block dark:hidden'/>
        <Image src="/assets/dark_logo.png" alt='Logo Image of Cozy Nest COmpany' width={60} height={52} className='hidden dark:block'/>
      </Link>
      
      <NavBar/>
      <div className='flex gap-6 items-center'>
        {!isLoggedIn && (
        <div className="flex gap-8">
          <Link href="/register" className="px-4 py-2 bg-cyan-700 text-white hover:bg-cyan-900 hover:text-cyan-300 rounded-sm">
            Sign Up
          </Link>
          <Link href="/log_in" className="px-4 py-2 bg-orange-300 text-white hover:bg-orange-500 hover:text-orange-300 rounded-sm">
            Log In
          </Link>
       </div> 
       )}
        <LanguageToggle/>
        {isLoggedIn && (
          //user profile btn
          <div className='rounded-full bg-red-200 p-4'>
            Hello
          </div>
        )}
        
      </div>
    </header>
  )
}

export default Header