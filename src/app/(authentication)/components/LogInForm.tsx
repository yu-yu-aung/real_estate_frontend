"use client"

import React from 'react'
import LogInHeader from './LogInHeader';
import { useForm } from 'react-hook-form'
import { minLength } from 'zod';
import { CircleX, Eye, X } from 'lucide-react';
import { required } from 'zod/mini';
import Link from 'next/link';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas/auth.schema';
import { useMutation } from '@tanstack/react-query';
import { loginMutation } from '../queries/useQueries';

type FormValues = {
  email: string; 
  password: string; 
};

const errorStyle = 'text-red-700 text-[15px] font-medium text-start';
const inputStyle = 'p-4 text-text-primary border border-input bg-card rounded-sm placeholder:text-text-tertiary placeholder:text-sm placeholder:font-normal w-full focus:outline-none focus:border-primary';

type InputProps = { 
  label: string; 
  type: string; 
  name: keyof FormValues; 
  register: any; 
  placeholder: string;
  error?: string;
}

const InputField = ({label, type, name, register, placeholder, error} : InputProps) => (
  <div className="flex flex-col items-start gap-1 mb-6 w-full">
    <label className="text-sm font-normal text-deep-teal-900">{label}</label>
    <input 
      type={type} 
      {...register(name)}
      placeholder={placeholder}
      className={inputStyle}
    />
    {error && <p className={errorStyle}>{error}</p>}
  </div>
); 

const LogInForm = () => {

  const { register, handleSubmit, reset, watch, formState: {errors}} = useForm<FormValues>({resolver: zodResolver(LoginSchema), mode: "onChange"});  

  const { mutate, isPending } = useMutation(loginMutation); 

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      }, 
      onError: (error) => {
        console.error("Form error: ", error);
      }
    })
    console.log("user data: ", data); 
  }; 

  return (
    <div className='bg-white flex flex-col gap-4 px-15 py-10 min-w-148'>
      <div className='flex flex-col'>
        <Link href="/register" className='w-full flex justify-end text-primary font-bold underline underline-offset-2'>
          Sign up
        </Link>
        <LogInHeader 
          heading='Welcome Back' 
          body='Glad to see you again. Please, log in to continue.'
        />
      </div>
      
      <div className='flex flex-col gap-8'>
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className='flex flex-col gap-6'
        >
          <div className='flex flex-col gap-4'>

            <InputField 
              label='Email' 
              type='email' 
              name='email' 
              register={register}
              placeholder='Email'
              error={errors.email?.message}
            /> 

            <div className='relative'>
              <InputField 
                label='Password' 
                type='password' 
                name='password' 
                register={register}
                placeholder='Password'
                error={errors.password?.message}
              /> 
              <Eye className='absolute size-6 text-text-primary top-10 right-4'/>
            </div>
            
            <Link href='/forgot_password' className='underline text-primary font-bold capitalize underline-offset-2'>Forgot password?</Link>
          </div>
          
          
        
          <button type='submit' className='py-4 text-center rounded-sm bg-primary text-white w-full'>
            Log In
          </button>
        </form>

        <div className='flex items-center gap-2 w-full justify-between'>
          <hr className='w-52 h-px text-input'/>
          <p className='text-sm text-deep-teal-900'>Or</p>
          <hr className='w-52 h-px text-input'/>
        </div>

        <Link href='/' className='flex gap-2 w-full justify-center'>
          <Image src='/assets/google.png' alt='Google Logo' width={24} height={24} className='object-cover'/>
          <p className='text-[16px] font-normal'>Continue with Google</p>
        </Link>
      </div>
      
    </div>   
  )
}

export default LogInForm