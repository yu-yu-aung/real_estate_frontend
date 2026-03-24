import { EllipsisVertical } from 'lucide-react';
import Image from 'next/image'
import { title } from 'process';
import React from 'react'

type VisitCardTypes = {
  imageUrl: string; 
  title: string; 
  tags: array; 
  address: string; 
  facts: array;

}

const VisitCard = ({imageUrl, title, tags, address, facts}: VisitCardTypes) => {
  return (
    <div className='flex rounded-l-xl'>

      {/* Image section */}
      <div className='rounded-l-xl overflow-hidden object-cover'>
        <Image src={imageUrl} alt="Image of the property"/>
      </div>

      <div className='p-4 flex flex-col gap-3'>
        {/* Text upper part */}
          <div className='flex flex-col gap-1 items-start'>
            <div className='flex items-center justify-between'>
              <h3 className='capitalize font-medium text-2xl'>{title}</h3> 
              <button>
                <EllipsisVertical className='size-6 text-primary'/>
              </button>
            </div>

            <div className='flex gap-4 justify-start'>
              {tags.map((tag) => (
                <button className='px-2 py-1 bg-gray-300'>{tag}</button>
              ))}
            </div>
            <div className='flex gap-4 justify-start'>
              {facts.map((fact, index) => (
                <button className={`px-2 py-1 ${ index !== facts.length ? "border-r border-gray-800" : ""}`}>{tag}</button>
              ))}
            </div> 
          </div>

          {/* Text lower part - Address */}
          <p className='underline text-[15px] text-wrap line-clamp-2'>{address}</p>
      </div>
    </div>
  )
}

export default VisitCard