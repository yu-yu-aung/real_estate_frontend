import { regionItems } from '@/constants/regionItems'
import React from 'react'
import StateCard from './StateCard'


const StatesRegion = () => {
  return (
    <section className='flex flex-col gap-16 items-start w-full px-15 py-15'>
      <h3 className='capitalize font-heading font-semibold text-[48px]'>Explore Our Rental Options <br/>
by Regions & States</h3>
      <div className='flex gap-12 pb-15'>
      {regionItems.map((item) => (
        <StateCard state={item.state} imageUrl={item.imageUrl} key={item.id} id={item.id}/>
      ))}
    </div>
    <hr className='w-full text-gray-600'></hr>
    </section>
    
  )
}

export default StatesRegion