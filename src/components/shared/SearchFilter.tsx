import React from 'react'
import SearchBar from './SearchBar'
import { ListFilter, SortDesc } from 'lucide-react'

const SearchFilter = () => {
  return (
    <div className='w-full flex items-center gap-10 text-text-primary mt-10'>
      <div className='flex-1'>
        <SearchBar type='other'/>
      </div>
      
      <div className='flex items-center gap-2 text-lg'>
        <ListFilter className='size-6'/>
        <p>Filter</p>
      </div> 
      <div className='flex items-center gap-2 text-lg'>
        <p>Sort</p>
        <SortDesc className='size-6'/>
      </div>
    </div>
  )
}

export default SearchFilter