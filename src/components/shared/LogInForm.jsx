import React from 'react'
import { useForm } from 'react-hook-form'
import LogInHeader from '../ui/LogInHeader'


const LogInForm = () => {
  const {register, handleSubmit, reset} = useForm(); 

  const onSubmit = (data) => {
    console.log("User data: ", data);
  }
  return ( 
    <>
      <LogInHeader 
        heading="welcome back" 
        body="Glad to see you again. Please, log in to continue"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input  placeholder='Full Name'/>
        <button type='submit'>Log In</button>
      </form>
    </>
    
  )
}

export default LogInForm