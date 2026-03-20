import Image from 'next/image'
import NavBtn from '../ui/NavBtn'
import LanguageToggle from '../ui/LanguageToggle'


const NavItems = [
  {title: 'Rentals', path: '/rentals'}, 
  {title: 'For Sale', path: '/for_sale'}, 
  { title: 'Blogs', path: '/blogs' },
  { title: 'About Us', path: '/about_us' },
  { title: 'Privacy Policy', path: '/privacy_policy' },
]

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 w-full">
      <div className='flex shrink-0'>
        <Image src="/assets/light_logo.png" alt='Logo Image of Cozy Nest COmpany' width={60} height={52} className='block dark:hidden'/>
        <Image src="/assets/dark_logo.png" alt='Logo Image of Cozy Nest COmpany' width={60} height={52} className='hidden dark:block'/>
      </div>
      
      <nav className='flex-1 flex items-center justify-center gap-8'>
       {
        NavItems.map((item, index) => (
          <NavBtn key={index} title={item.title} path={item.path}/>
        ))
       }
      </nav>
      <div className='flex gap-6 items-center'>
        <LanguageToggle/>
        <div className='rounded-full bg-red-200 p-4'>
          Hello
        </div>
      </div>
    </header>
  )
}

export default Header