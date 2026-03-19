import Image from 'next/image'
import NavBtn from '../ui/NavBtn'


const NavItems = [
  {title: 'Rentals', path: '/rentals'}, 
  {title: 'For Sale', path: '/for_sale'}, 
  { title: 'Blogs', path: '/blogs' },
  { title: 'About Us', path: '/about_us' },
  { title: 'Privacy Policy', path: '/privacy_policy' },
]

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <Image src="/assets/cozy_nest_logo.png" alt='Logo Image of Cozy Nest COmpany' width={200} height={200}/>
      <nav className='flex items-center justify-between w-full'>
       {
        NavItems.map((item, index) => (
          <NavBtn key={index} title={item.title} path={item.path}/>
        ))
       }
      </nav>
      <div className='flex justify-between items-center'>
        <button>
          Eng
        </button>
        <div className='rounded-full bg-red-200'>
          Hello
        </div>
      </div>
    </header>
  )
}

export default Header