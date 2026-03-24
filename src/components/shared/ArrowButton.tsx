'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const baseStyle = 'text-primary hover:text-cyan-900 hover:scale-110'
const ArrowButton = () => {

  const handleClick = () => {
    console.log("You clicked");
  }
  return ( 
    <div className='flex gap-16 w-full justify-end'>
      <button onClick={handleClick} className={baseStyle}>
        <ChevronLeft className='size-6 '/>
      </button>
      <button onClick={handleClick} className={baseStyle}>
        <ChevronRight className='size-6'/>
      </button>
    </div>
    
  )
}

export default ArrowButton