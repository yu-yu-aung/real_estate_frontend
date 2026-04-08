'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const baseStyle = 'text-text-primary hover:text-primary hover:scale-110';
const btnStyle = "text-lg px-3.5 py-1.5 rounded-sm bg-background border border-input text-text-primary hover:bg-deep-teal-100"
  
const Pagination = () => {
  const handleClick = () => {
    console.log("You clicked");
  }

  return (
    <div className='flex gap-4 w-full justify-end'>
      <button onClick={handleClick} className={baseStyle}>
        <ChevronLeft className='size-8 '/>
      </button>
      <button className={`${btnStyle}`}>
        1
      </button>
      <button className={btnStyle}>
        2
      </button>
      <button className={btnStyle}>
        3
      </button>
      <button className={btnStyle}>
        4
      </button>
      <button className={btnStyle}>
        5
      </button>
      <button onClick={handleClick} className={baseStyle}>
        <ChevronRight className='size-8'/>
      </button>
    </div>
  )
}

export default Pagination