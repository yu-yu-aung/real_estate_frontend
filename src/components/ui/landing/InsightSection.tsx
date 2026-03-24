import Button from '@/components/shared/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InsightSection = () => {
  return (
    <>
      <section className='grid grid-cols-2 gap-8 overflow-hidden relative bg-gray-200 w-full h-164 my-15'>
      <div className='relative col-span-1 w-full h-147 overflow-visible'>
        <Image src='/assets/blog.png' alt='Picture of a laptop and an indoor plant' fill className='object-cover'/>
      </div>
      <div className='p-15 gap-4 flex flex-col items-start col-span-1 my-auto'>
        <h3 className='font-heading text-5xl font-semibold capitalize'>Insights for your <br/>home</h3>
        <p className='font-body font-normal text-lg text-start'>Discover valuable insights, tips, and inspiration to <br/> enhance your living experience.</p>
        <Link href="/blogs" className='hover:text-tertiary active:text-tertiary'>
          <Button variant='tertiary' text='Read Blogs'/>
        </Link>
        
      </div>
      <div className='size-75 absolute -bottom-37.5 -right-37.5 rounded-full bg-cyan-300 mx-15'></div>
    </section>
    
    <hr className='w-7xl mx-auto text-tertiary my-7.5' />
    </>
    
  )
}

export default InsightSection