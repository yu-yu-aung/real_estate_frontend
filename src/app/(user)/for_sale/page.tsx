import SearchFilter from '@/components/shared/SearchFilter'
import React from 'react'
import ForSaleTable from '../components/ForSaleTable'

const Page = () => {
  return (
    <div className='w-full px-15 flex flex-col gap-8'>
      <SearchFilter/>
      <ForSaleTable/>
    </div>
  )
}

export default Page