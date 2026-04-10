import React, { useEffect, useRef, useState } from 'react'

type Props = {
  showSort: boolean; 
  setShowSort: React.Dispatch<React.SetStateAction<boolean>>; 
} 

const options = [
    { label: "Default", value: "default" },
    { label: "Price (Low to High)", value: "low" },
    { label: "Price (High to Low)", value: "high" },
    { label: "Newest to oldest listing", value: "newest" },
];


const SortDropDown = ({showSort, setShowSort} : Props) => { 

  const dropdownRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState("default"); 

  useEffect(() => {
    const handleClickOutside = (e : MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowSort(false); 
      }
    }

    document.addEventListener("mousedown", handleClickOutside); 
    return () => document.removeEventListener("mousedown", handleClickOutside); 
  }, [setShowSort]);

  const handleChange = (value: string) => {
    setSelected(value); 
    console.log("Selected: ", value);
    setShowSort(false); 
  }

  if (!showSort) return null; 

  return (
      <div ref={dropdownRef} className='flex flex-col gap-3 p-4 bg-background shadow-lg'>
          {options.map((o) => (
            <label key={o.value} className='flex items-center gap-2 cursor-pointer text-text-primary'>
              <input 
                type='radio' 
                name='sort' 
                value={o.value}
                checked={selected === o.value}
                onChange={() => handleChange(o.value)}
                className="accent-primary w-4 h-4 cursor-pointer"
              /> {o.label}
            </label>
          ))}
        </div>
  )
}

export default SortDropDown