

import { CardTypes } from '@/types/CardTypes';
import { EllipsisVertical } from 'lucide-react';
import Image from 'next/image';
import React from 'react'



//Reusable pieces 
const Tags = ({ tags }: { tags: string[] }) => (
  <div className='flex gap-4'>
    {tags.map((tag, index) => (
      <span key={index} className='px-2 py-1 bg-gray-300 rounded'>
        {tag}
      </span>
    ))}
  </div>
)

const Facts = ({ facts }: { facts: string[] }) => (
  <div className='flex gap-4'>
    {facts.map((fact, index) => (
      <span
        key={index}
        className={`px-2 py-1 ${
          index !== facts.length - 1 ? "border-r border-gray-400" : ""
        }`}
      >
        {fact}
      </span>
    ))}
  </div>
)

const Price = ({type, price}: {type: 'rent' | 'sale'; price: number}) => (
  <h3 className='text-2xl font-medium capitalize'>
    {type === "rent"
      ? `${price} MMK / Month`
      : `${price} Lakhs`}
  </h3>
)

const Card = ({variant, imageUrl, title, price, type, tags, address, facts}: CardTypes) => {
  // Horizontal Layout
  if (variant === "horizontal") {
    return (
      <div className='flex rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.15)] bg-white'>
        
        <div className='w-60 overflow-hidden rounded-l-xl'>
          <Image src={imageUrl} alt="property" width={340} height={304} className='object-cover' />
        </div>

        <div className='p-4 flex flex-col gap-3 w-full text-primary'>
          <div className='flex justify-between'>
            <Price type={type} price={price}/>
            
            <EllipsisVertical className='size-6' />
          </div>
          <p className='text-sm line-clamp-2 text-tertiary'>{title}</p>
          <Tags tags={tags} />
          <Facts facts={facts} />

          <p className='underline text-sm line-clamp-2'>{address}</p>
        </div>
      </div>
    )
  }

  // Vertical Layout
  return (
    <div className='flex flex-col rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.15)] bg-white'>
      
      <div className='relative overflow-hidden rounded-t-xl'>
        <Image src={imageUrl} alt="property" width={338} height={240} className='object-cover' />
        <button className='absolute top-2 right-2'>
          <EllipsisVertical className='size-6 text-white' />
        </button>
      </div>

      <div className='p-4 flex flex-col gap-3 text-primary'>
        <Price type={type} price={price}/>

        <p className='text-sm line-clamp-2 text-tertiary'>{title}</p>
        <Tags tags={tags} />
        <Facts facts={facts} />

        <p className='underline text-sm line-clamp-2'>{address}</p>
      </div>
    </div>
  )
}


export default Card