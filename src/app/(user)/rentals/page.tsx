import SearchFilter from '@/components/shared/SearchFilter'
import React from 'react'
import RentalTable from '../components/RentalTable'

const Page = () => {
  return (
    <div className='w-full px-15 flex flex-col gap-8'>
      <SearchFilter/>
      <RentalTable/>
    </div>
  )
}

export default Page