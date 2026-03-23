'use client'; 

import { useForm } from 'react-hook-form';

type Props = {type: string}

type FormValues = {
  keyWord: string;
}

const SearchBar = ({type = "home"}: Props) => { 

  const {register, handleSubmit, reset} = useForm<FormValues>();  
  
  const onSubmit = (data: FormValues) => {
    console.log("Search keyword: ", data);
    reset(); 
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2'>
      <input  
        {...register("keyWord")}  required
        className='p-4 w-80.5 border border-primary rounded-sm bg-white' placeholder='Search by Town'/>
        <button type='submit' className='py-4 px-8 bg-primary text-white font-semibold text-lg rounded-sm'>Search</button>
    </form>
  )
}

export default SearchBar