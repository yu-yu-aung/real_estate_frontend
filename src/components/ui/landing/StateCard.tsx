import Image from 'next/image';
import React from 'react'

type StateCardType = {
  id: number;
  imageUrl: string; 
  state: string;
}
const StateCard = ({id, imageUrl, state} : StateCardType) => {
  return (
    <div className='transition-transform duration-200 hover:scale-110 ease-in-out flex flex-col items-center rounded-xl'> 
      {id % 2 === 0 && 
        <div className='bg-transparent h-12 w-full'></div>
      }
      <div className='relative'>
      <Image src={`${imageUrl}`}  alt={`Famous Photo of ${state}`} width={240} height={385}/> 
      
      <div className='absolute bottom-0 left-0 w-full bg-linear-to-t h-13.5 from-white/70 to-transparent rounded-b-xl'></div>
      <h4 className='capitalize font-medium font-body py-2 w-full text-center absolute bottom-0 text-2xl'>{state}</h4>
    </div>
    </div>
    
  )
}

export default StateCard