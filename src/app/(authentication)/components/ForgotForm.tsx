"use client"

import React from 'react'
import LogInHeader from './LogInHeader';
import { useForm } from 'react-hook-form'
import { minLength } from 'zod';
import { ArrowBigLeft, ArrowLeft, CircleX, Eye, X } from 'lucide-react';
import { required } from 'zod/mini';
import { useRouter } from 'next/navigation';

type FormValues = {
  name: string; 
  email: string; 
  password: string; 
  confirm_password: string;
};

const errorStyle = 'text-red-700 text-[15px] font-medium text-start';
const inputStyle = 'p-4 text-text-primary border border-input bg-card rounded-sm placeholder:text-text-tertiary placeholder:text-sm placeholder:font-normal w-full focus:outline-none focus:border-primary';

type InputProps = { 
  label: string; 
  type: string; 
  name: keyof FormValues; 
  register: any; 
  rules?: any; 
  placeholder: string;
  error?: string;
}

const InputField = ({label, type, name, register, rules, placeholder, error} : InputProps) => (
  <div className="flex flex-col items-start gap-1 mb-6 w-full">
    <label className="text-sm font-normal text-deep-teal-900">{label}</label>
    <input 
      type={type} 
      {...register(name, rules)}
      placeholder={placeholder}
      className={inputStyle}
    />
    {error && <p className={errorStyle}>{error}</p>}
  </div>
); 

const ForgotForm = () => {

  const { register, handleSubmit, reset, formState: {errors}} = useForm<FormValues>({mode: "onChange"}); 

  const router = useRouter(); 

  const onSubmit = (data: FormValues) => {
    console.log("user data: ", data);
    reset(); 
  }; 


  return (
    <div className='bg-white flex flex-col items-center gap-4 px-15 py-10 min-w-148'>
      <button onClick={() => router.back()}  className='w-full flex justify-start text-text-primary font-bold'>
        <ArrowLeft/>
      </button>
      <LogInHeader 
        heading='Forget Password?' 
        body='Please, enter the email address associated with your account and we’ll sent a secure link to reset your password. Please, check your inbox for future instructions.'
      />
      
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='flex flex-col gap-8 w-full'
      >
        <InputField 
          label='Email' 
          type='email' 
          name='email' 
          register={register}
          rules={{
            required: "Email is required", 
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },          
          }} 
          placeholder='Email'
          error={errors.email?.message}
        /> 

        <button type='submit' className='py-4 text-center rounded-sm bg-primary text-white w-full capitalize'>
          Send Reset Instructions
        </button>
      </form>
       
    </div>   
  )
}

export default ForgotForm