"use client"

import React from 'react'

import { useForm } from 'react-hook-form'
import { CircleX, Eye, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import LogInHeader from './LogInHeader';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/schemas/auth.schema';
import { RegisterType } from '@/types/AuthTypes';
import { registerMutation } from '../queries/useQueries';
import { useMutation } from '@tanstack/react-query';
import { error } from 'console';

type FormValues = RegisterType;

const errorStyle = 'text-red-700 text-[15px] font-medium text-start';
const inputStyle = 'p-4 text-primary border border-input bg-card rounded-sm placeholder:text-text-tertiary placeholder:text-sm placeholder:font-normal w-full focus:outline-none focus:border-primary';

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

const RegisterForm = () => {

  const { register, handleSubmit, reset, formState: {errors}} = useForm<FormValues>({resolver: zodResolver(RegisterSchema), mode: "onChange"}); 
  
  const { mutate, isPending } = useMutation(registerMutation); 

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        reset(); 
      }, 
      onError: (error) => {
        console.error("Form error: ", error);
      }
    });
    console.log("user data: ", data);  
  }; 

  return (
    <div className='bg-white flex flex-col gap-4 px-15 py-10 min-w-148'>
      <div className='flex flex-col'>
        <Link href="/log_in" className='w-full flex justify-end text-primary font-bold underline underline-offset-2'>
          Log in
        </Link>
        <LogInHeader 
          heading='Welcome' 
          body='Create your account to start exploring'
        />
      </div>
      
      <div className='flex flex-col gap-8'>
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className='flex flex-col gap-6'
        >
          <div className='flex flex-col gap-4'>
            <InputField 
              label='Full Name' 
              type='text' 
              name='name' 
              register={register}
              placeholder='Full Name'
              error={errors.name?.message}
            /> 

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
              <Eye className='absolute size-6 text-primary top-10 right-4'/>
            </div>
            
            <div className='relative'>
              <InputField 
                label='Confirm Password' 
                type='password' 
                name='confirmPassword' 
                register={register}
                placeholder='Confirm Password'
                error={errors.confirmPassword?.message}
              /> 
              <Eye className='absolute size-6 text-primary top-10 right-4'/>
            </div>
          </div>
          

          <div className='flex gap-2 items-center w-full'>
            <input type='checkbox' name='check' required/>
            <p className='text-body'>I agree to <span className='underline underline-offset-2 text-primary font-bold'>Terms & Policy</span></p>
          </div>
        
          <button type='submit' className='py-4 text-center rounded-sm bg-primary text-white w-full'>
            {isPending ? "Registering" : "Register"}
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

export default RegisterForm