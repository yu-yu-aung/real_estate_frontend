'use client';

import { usePathname, useRouter } from "next/navigation";

type Props = {
  title: string; 
  path: string; 
};

const NavBtn = ({title, path}: Props) => {
  
  const router = useRouter(); 
  const pathName = usePathname(); 

  const isActive = pathName === path; 

  return (
    <button
     className={`font-medium text-lg flex items-center justify-between capitalize ${isActive ? 'text-primary' : 'text-heading hover:text-primary'}`}
     onClick={() => router.push(path)} >
      {title} 
    </button>
  )
}

export default NavBtn; 