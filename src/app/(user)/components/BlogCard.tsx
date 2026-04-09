'use client'

import { Clock, Heart, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


type Props = {
  id: number;
  imageUrl: string; 
  category: string; 
  title: string; 
  intro: string; 
  time: number;
}

const BlogCard = ({id, imageUrl, category, title, intro, time} : Props) => { 
  const router = useRouter(); 

  const handleClick = () => {
    router.push(`/blogs/${id}`)
  }

  return (
    <div onClick={handleClick} className='rounded-sm flex flex-col h-142.5 shadow-lg bg-card hover:bg-accent'>
      <Image src={imageUrl} alt='Cover Image of the Blog' width={560} height={279}/>
      <div className='flex flex-col gap-4 p-6 h-full'>
        <div className='flex justify-between'>
          <p className='bg-deep-teal-50 py-1 px-2 font-bold text-sm'>Topic: <span className='font-normal capitalize'>{category}</span></p>
          <div className='flex gap-6 text-text-primary'>
            <button>
              <Heart className='size-6'/>
            </button>
            <button>
              <SquareArrowOutUpRight className='size-6'/>
            </button>
          </div>
        </div>
        
        <div className='flex flex-col items-start gap-4'>
          <h3 className='font-medium text-2xl text-text-primary line-clamp-2 capitalize'>{title}</h3>
          <p className='text-lg text-text-secondary line-clamp-3'>{intro}</p>
        </div>
        
        <div className='flex gap-1 justify-end mt-auto'>
          <Clock className='size-6'/>
          <p>{time} minutes to read</p>
        </div>
      </div>
      
    </div>
  )
}

export default BlogCard