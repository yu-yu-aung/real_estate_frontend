'use client'; 

import { useForm } from 'react-hook-form';

type Props = {type: string}

type FormValues = {
  keyWord: string;
}

const SearchBar = ({type = "home" }: Props) => { 

  const {register, handleSubmit, reset} = useForm<FormValues>();  
  
  const onSubmit = (data: FormValues) => {
    console.log("Search keyword: ", data);
    reset(); 
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2'>
      <input  
        {...register("keyWord")}  required
        className={`p-4 ${type === "home" ? 'w-80.5' : 'w-full'} border border-input bg-card rounded-sm placeholder:text-text-tertiary placeholder:text-sm placeholder:font-normal w-full focus:outline-none focus:border-primary`} placeholder={type === "home" ? "Search by town" : "Search"}/>
        <button type='submit' className='py-4 px-8 bg-primary text-white font-semibold text-lg rounded-sm'>Search</button>
    </form>
  )
}

export default SearchBar