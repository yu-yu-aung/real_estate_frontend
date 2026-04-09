import React from 'react'

const page = async ({params} : {params: Promise<{ id: number }>}) => { 

  const {id} = await params; 
  return (
    <div>This is blog detailed page for {id}</div>
  )
}

export default page