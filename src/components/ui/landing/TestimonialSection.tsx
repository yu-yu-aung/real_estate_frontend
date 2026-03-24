
import React from 'react'
import TestimonialCard from './TestimonialCard'
import ArrowButton from '@/components/shared/ArrowButton'

const customers = [
  {
    id: 1, 
    name: "Cameron Williamson", 
    date: "March 12, 2025", 
    message: 'Using this felt like painting on a fresh canvas. Every step was calm and simple, almost like adding gentle brushstrokes across a quiet sky. Even when I thought I might make a mistake, it turned into a happy little surprise that made the whole experience better. It never felt rushed or stressful—just peaceful, smooth, and full of small joys.', 
    imageUrl: "/assets/testi.png"
  }, 
  {
    id: 2, 
    name: "Cameron Williamson", 
    date: "March 12, 2025", 
    message: 'Using this felt like painting on a fresh canvas. Every step was calm and simple, almost like adding gentle brushstrokes across a quiet sky. Even when I thought I might make a mistake.', 
    imageUrl: "/assets/testi.png"
  }, 
  {
    id: 3, 
    name: "Cameron Williamson", 
    date: "March 12, 2025", 
    message: 'Using this felt like painting on a fresh canvas. Every step was calm and simple, almost like adding gentle brushstrokes across a quiet sky.', 
    imageUrl: "/assets/testi.png"
  }
]
const TestimonialSection = () => {
  return (
    <section className='flex flex-col gap-16 items-start w-full px-15 py-15'>
      <h3 className='capitalize font-heading font-semibold text-[48px]'>What our customers say? </h3>
      <div className='flex gap-8 pb-15 w-full'>
      {customers.map((c) => (
        <TestimonialCard key={c.id} name={c.name} date={c.date} message={c.message} imageUrl={c.imageUrl}/>
      ))}
    </div>
    <div className='ml-auto mb-15'>
        <ArrowButton/>
      </div>
    </section>
  )
}

export default TestimonialSection