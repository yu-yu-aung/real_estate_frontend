import { Clock, Heart, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
  imageUrl: string; 
  category: string; 
  title: string; 
  intro: string; 
  time: number;
}

const BlogCard = ({imageUrl, category, title, intro, time} : Props) => {
  return (
    <div className='rounded-sm flex flex-col'>
      <Image src={imageUrl} alt='Cover Image of the Blog'/>
      <div className='flex flex-col gap-4 p-4'>
        <p>Topic: <span>{category}</span></p>
        <div>
          <button>
            <Heart className='size-6'/>
          </button>
          <button>
            <SquareArrowOutUpRight />
          </button>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{intro}</p>
        </div>
        <div>
          <Clock/>
          <p>{time} minutes to read</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard