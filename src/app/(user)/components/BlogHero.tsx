import Image from 'next/image'
import React from 'react'

const BlogHero = () => {
  return (
    <section className='flex justify-between items-center w-full bg-deep-teal-100'>
      <div className='flex flex-col items-start p-15 gap-4'>
        <h2 className='font-heading text-6xl font-semibold capitalize'>Insights for Your Home</h2>
        <p className='text-xl font-sans font-normal'>Explore insights for your home! </p>
      </div>
      <Image src="/assets/blog_hero.png" alt='Taking notes from laptop image' width={522} height={320}/>
    </section>
  )
}

export default BlogHero