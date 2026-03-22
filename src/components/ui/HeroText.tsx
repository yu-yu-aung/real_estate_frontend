import React from 'react'
import SearchBar from './SearchBar'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 items-start pr-15 pb-15'>
      <h1>Discover Your 
      happy little home</h1>
      <p>
        Discover rentals and homes for sale with us. We offer a wide range of properties and hassle-free browsing.
      </p>
      <SearchBar type='home'/>
    </div>
  )
}

export default HeroText