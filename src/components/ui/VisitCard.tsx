import { EllipsisVertical } from 'lucide-react';
import Image from 'next/image'
import { title } from 'process';
import React from 'react'

type VisitCardTypes = {
  imageUrl: string; 
  price: number;
  title: string; 
  tags: string[]; 
  address: string; 
  facts: string[];
}

const VisitCard = ({imageUrl,price, title, tags, address, facts}: VisitCardTypes) => {
  return (
    <div className='flex rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.15)] bg-white'>

      {/* Image section */}
      <div className='rounded-l-xl overflow-hidden w-60'>
        <Image src={imageUrl} alt="Image of the property" width={240} height={202} className='object-cover'/>
      </div>

      <div className='p-4 flex flex-col gap-3 w-full'>
        {/* Text upper part */}
          <div className='flex flex-col gap-1 items-start w-full text-primary'>
            <div className='flex items-center justify-between w-full'>
              <h3 className='capitalize font-medium text-2xl'>{title}</h3> 
              <button>
                <EllipsisVertical className='size-6 text-primary'/>
              </button>
            </div>

            <div className='flex gap-4 justify-start'>
              {tags.map((tag, index) => (
                <button className='px-2 py-1 bg-gray-300' key={index}>{tag}</button>
              ))}
            </div>
            <div className='flex gap-4 justify-start'>
              {facts.map((fact, index) => (
                <button className={`px-2 py-1 ${ index !== facts.length - 1 ? "border-r border-gray-800" : ""}`} key={index}>{fact}</button>
              ))}
            </div> 
          </div>

          {/* Text lower part - Address */}
          <p className='underline text-[15px] text-wrap line-clamp-2 text-primary'>{address}</p>
      </div>
    </div>
  )
}

export default VisitCard