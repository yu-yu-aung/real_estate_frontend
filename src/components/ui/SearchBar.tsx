'use client'; 

import React from 'react'
import { useForm } from 'react-hook-form';

type Props = {type: string}

const SearchBar = ({type = "home"}: Props) => { 

  const {register, handleSubmit} = useForm();  
  
  const onSubmit = (data) => {
    console.log("Search keyword: ", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2'>
      <input className='p-4 w-80.5 border border-primary rounded-sm' placeholder='Search by Town'/>
      <button type='submit' className='py-4 px-8 bg-primary text-white font-semibold text-lg rounded-sm'>Search</button>
    </form>
  )
}

export default SearchBar