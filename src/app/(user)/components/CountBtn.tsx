import React from 'react'

type Props = {
  count: string;
  activeCount: string; 
  setActiveCount: (count: string) => void; 
}


const CountBtn = ({count, activeCount, setActiveCount}: Props) => {
  return (
    <button onClick={() => setActiveCount(count)} className={`text-center px-4 py-2 border border-input bg-card text-sm text-text-primary hover:bg-popover capitalize ${activeCount === count ? "bg-deep-teal-100 border-sm transition-transform duration-100" : ""}`}>
      {count}
    </button>
  )
}

export default CountBtn