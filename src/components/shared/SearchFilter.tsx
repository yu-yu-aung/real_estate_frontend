"use client"

import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { ListFilter, SortDesc } from 'lucide-react'
import SortDropDown from '@/app/(user)/components/SortDropDown'
import FilterDropDown from '@/app/(user)/components/FilterDropDown'

const SearchFilter = () => { 

  const [ showSort, setShowSort ] = useState(false); 
  const [ showFilter, setShowFilter ] = useState(false); 
  return (
    <div className='w-full flex items-center gap-10 text-text-primary mt-10 relative z-10'>
      <div className='flex-1'>
        <SearchBar type='other'/>
      </div>
      
      <div onClick={() => setShowFilter(!showFilter)} className='flex items-center gap-2 text-lg'>
        <ListFilter className='size-6'/>
        <p>Filter</p>
      </div> 

       <div className='absolute top-15 right-10'>
        <FilterDropDown showFilter={showFilter} setShowFilter={setShowFilter}/>
      </div>

      <div onClick={() => setShowSort(!showSort)} className='flex items-center gap-2 text-lg'>
        <p>Sort</p>
        <SortDesc className='size-6'/>
      </div>

      <div className='absolute top-15 right-0'>
        <SortDropDown showSort={showSort} setShowSort={setShowSort}/>
      </div>
    </div>
  )
}

export default SearchFilter