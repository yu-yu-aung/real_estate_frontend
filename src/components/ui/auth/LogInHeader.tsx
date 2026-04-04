import Image from 'next/image'
import React from 'react'

type Props = {
  heading: string;  
  body: string;
}

const LogInHeader = ({heading, body}: Props) => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <Image src="/assets/light_logo.png" alt='Logo Image of Cozy Nest COmpany' width={60} height={52}/>
      <h3 className='text-primary text-[40px] capitalize font-semibold'>{heading}</h3>
      <p className='text-primary text-[18px] capitalize font-normal'>{body}</p>
    </div>
  )
}

export default LogInHeader