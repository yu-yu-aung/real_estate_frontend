import { Facebook, Instagram, Linkedin, LinkedinIcon } from 'lucide-react'
import React from 'react'

const SocialIcons = () => {
  return (
    <div className='flex items-center gap-8'>
      <Facebook className='size-8 text-heading'/>
      <Instagram className='size-8 text-heading'/>
      <LinkedinIcon className='size-8 text-heading'/>
    </div>
  )
}

export default SocialIcons