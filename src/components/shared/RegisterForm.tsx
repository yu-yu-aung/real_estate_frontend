import React from 'react'
import LogInHeader from '../ui/auth/LogInHeader';
import { useForm } from 'react-hook-form'
import { minLength } from 'zod';
import { CircleX, Eye, X } from 'lucide-react';
import { required } from 'zod/mini';

type FormValues = {
  name: string; 
  email: string; 
  password: string; 
  confirm_password: string;
};

const errorStyle = 'text-red-700 text-[15px] font-medium text-start';
const inputStyle = 'p-4 text-primary border border-primary rounded-sm placeholder:text-helper placeholder:text-lg placeholder:font-normal w-full';

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
    <label className="text-[15px] font-normal text-primary">{label}</label>
    <input 
      type={type} 
      {...register(name, rules)}
      placeholder={placeholder}
      className={inputStyle}
    />
    {error && <p className={errorStyle}>{error}</p>}
  </div>
); 

const RegisterForm = () => {

  const { register, handleSubmit, reset, watch, formState: {errors}} = useForm<FormValues>({mode: "onChange"}); 

  const onSubmit = (data: FormValues) => {
    console.log("user data: ", data);
    reset(); 
  }; 

  const password = watch('password'); 

  return (
    <div className='bg-white rounded-sm flex flex-col gap-4 px-15 py-8 max-w-156'>
      <div className='flex flex-col'>
        <button className='w-full flex justify-end'>
          <CircleX className='size-6 text-primary'/>
        </button>
        <LogInHeader 
          heading='Welcome' 
          body='Create your account to start exploring'
        />
      </div>
      

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='flex flex-col gap-2'
      >
        <InputField 
          label='Full Name' 
          type='text' 
          name='name' 
          register={register}
          rules={{
            required: "Username is required", 
            pattern: {
              value: /^[A-Za-z0-9_ ]+$/, 
              message: 'Only letters, numbers, underscores and spaces allowed',
            }, 
            minLength: {
              value: 2, 
              message: "Full name must be at least 2 characters", 
            },
          }} 
          placeholder='Full Name'
          error={errors.name?.message}
        /> 

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

        <div className='relative'>
          <InputField 
            label='Password' 
            type='password' 
            name='password' 
            register={register}
            rules={{
              required: "Password is required", 
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },          
            }} 
            placeholder='Password'
            error={errors.password?.message}
          /> 
          <Eye className='absolute size-6 text-primary top-10 right-4'/>
        </div>
        
        <div className='relative'>
          <InputField 
            label='Confirm Password' 
            type='password' 
            name='confirm_password' 
            register={register}
            rules={{
              required: "Confirm Password is required", 
              validate: (value: string) => value === password || "Passwords do not match",          
            }} 
            placeholder='Confirm Password'
            error={errors.confirm_password?.message}
          /> 
          <Eye className='absolute size-6 text-primary top-10 right-4'/>
        </div>

        <div className='flex gap-2 items-center w-full'>
          <input type='checkbox' name='check' required/>
          <p className='text-body'>I agree with CozyNest’s <span className='underline text-primary'> Terms of Service </span> and <span className='underline text-primary'>Privacy Policy</span></p>
        </div>
      
        <button type='submit' className='py-4 text-center rounded-sm bg-primary text-white w-full'>
          Register
        </button>
      </form>
    </div>   
  )
}

export default RegisterForm