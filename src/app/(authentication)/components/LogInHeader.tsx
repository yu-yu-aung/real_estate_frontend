import Image from 'next/image'
import React from 'react'

type Props = {
  heading: string;  
  body: string;
}

const LogInHeader = ({heading, body}: Props) => {
  return (
    <div className='flex flex-col gap-4 items-center text-teal-900 max-w-86'>
      
      <h3 className='text-[24px] capitalize font-semibold'>{heading}</h3>
      <p className='text-[14px] font-normal text-wrap text-center '>{body}</p>
    </div>
  )
}

export default LogInHeader