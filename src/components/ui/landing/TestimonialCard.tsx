import Image from 'next/image';
import React from 'react'

type TestType = {
  imageUrl: string; 
  name: string; 
  date: string; 
  message: string;
}

const TestimonialCard = ({imageUrl, name, date, message}: TestType) => {
  return (
    <div className='h-78 w-full flex flex-col gap-4 p-6 items-start rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.15)] bg-white hover:bg-gray-200 transition-transform ease-in-out duration-200'>
      <div className='flex gap-2 justify-start items-center'>
        <div className='relative w-15 h-15 rounded-full overflow-hidden'>
          <Image src={imageUrl} alt={`A photo of ${name}`} fill className='object-cover' />
        </div>
        <div className='flex flex-col items-start gap-1'>
          <h3 className='capitalize font-body text-lg font-medium'>{name}</h3>
          <p className='text-[15px] font-normal font-body'>{date}</p>
        </div>
      </div>
      <p className='text-[15px] font-normal font-body w-full text-wrap mt-auto'>{message}</p>
    </div>
  )
}

export default TestimonialCard