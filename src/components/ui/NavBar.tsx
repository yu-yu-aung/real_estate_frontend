import NavBtn from "./NavBtn"
import { NavItems } from "@/constants/navItems";

const NavBar = () => {
  return (
    <nav className='flex-1 flex items-center justify-center gap-8'>
       {
        NavItems.map((item) => (
          <NavBtn key={item.path} title={item.title} path={item.path}/>
        ))
       }
      
      </nav>
  )
}

export default NavBar; 