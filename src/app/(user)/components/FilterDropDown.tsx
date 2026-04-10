import { ChevronDown } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Range, getTrackBackground } from 'react-range';
import CountBtn from './CountBtn';

type Props = {
  showFilter: boolean; 
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
} 

const MIN = 0; 
const MAX = 1000000; 

const initialState = {
  price: [50000, 500000], 
  houseType: "", 
  beds: "Any", 
  baths: "Any",
  lease: "Any"
}

const FilterDropDown = ({showFilter, setShowFilter} : Props) => {

  const dropdownRef = useRef<HTMLDivElement>(null); 

  const [openSection, setOpenSection] = useState<string | null>(null); 
  const [filters, setFilters ] = useState(initialState); 

  //to close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e : MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)){
        setShowFilter(false); 
        setOpenSection(null); 
      }
    } 

    document.addEventListener("mousedown", handleClickOutside); 
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [setShowFilter]); 

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section)); 
  } 

  const resetAll = () => {
    setFilters(initialState); 
    setOpenSection(null);
  }

  if (!showFilter) return null; 

  return (
        <div ref={dropdownRef} className='flex flex-col gap-3 p-6 shadow-lg w-99 rounded-sm bg-background'>

          {/* price  */}
          <div className='border-b-2 border-input pb-6'>
            <div onClick={() => toggleSection("price")} className='flex justify-between'>
              <p className='capitalize text-lg font-medium'>Price</p>
              <ChevronDown className={`size-6 ${openSection === "price" ? "rotate-180 transition-transform duration-200 ease-in-out" : "rotate-0 transition-transform duration-200 ease-in-out"}`}/>
            </div>

            {
              openSection === "price" && (
                <div className='flex flex-col gap-4 w-full'>
              {/* Slider */}
              <Range
                values={filters.price}
                step={10000}
                min={MIN}
                max={MAX}
                onChange={(vals) => setFilters(prev => ({...prev, price: vals}))}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-2 mt-8 w-full rounded bg-gray-200"
                    style={{
                      background: getTrackBackground({
                        values: filters.price,
                        colors: ["#ccc", "#006D77", "#ccc"], 
                        min: MIN,
                        max: MAX,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="h-5 w-5 bg-primary border-4 border-deep-teal-50 rounded-full shadow-md cursor-pointer"
                  />
                )}
              /> 

              {/* Inputs */}
              <div className="flex justify-between w-full gap-2">
                <div className="flex flex-col gap-1 items-start">
                  <label className="text-sm text-text-primary">Minimum (MMK) </label>
                  <input
                    type="number"
                    value={filters.price[0]}
                    readOnly
                    className="border border-input bg-card px-4 py-2 text-lg w-full"
                  />
                </div>

                <div className="flex flex-col gap-1 items-start">
                  <label className="text-sm text-text-primary">Maximum (MMK)</label>
                  <input
                    type="number"
                    value={filters.price[1]}
                    readOnly
                    className="border border-input bg-card px-4 py-2 text-lg w-full"
                  />
                </div>
              </div> 

              <button onClick={() => setFilters(prev => ({...prev, price: [MIN, MAX]}))} className='underline underline-offset-2 text-lg font-medium text-end'>Remove mini and maxi price</button>
            </div>
              )
            }
          </div>
          
          {/* House Type */} 
          <div className='border-b-2 border-input pb-6'>
            <div onClick={() => toggleSection("type")} className='flex justify-between'>
              <p className='capitalize text-lg font-medium'>House Type</p>
              <ChevronDown className={`size-6 ${openSection === "type" ? "rotate-180 transition-transform duration-200 ease-in-out" : "rotate-0 transition-transform duration-200 ease-in-out"}`}/>
            </div>

            {
              openSection === "type" && (
                <div className='flex flex-col gap-3 mt-4'>
                  {["house", "apartment", "townhouse"].map(type => (
                    <label key={type} className='flex gap-2 items-center cursor-pointer'>
                      <input
                        type='checkbox'
                        name='houseType'
                        checked={filters.houseType === type}
                        onChange={() => setFilters(prev => ({ ...prev, houseType: type }))}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              )
            }
          </div> 

          {/* baths abd beds*/} 
          <div className='border-b-2 border-input pb-6'>
            <div onClick={() => toggleSection("bed")} className='flex justify-between'>
              <p className='capitalize text-lg font-medium'>Beds &amp; Baths</p>
              <ChevronDown className={`size-6 ${openSection === "bed" ? "rotate-180 transition-transform duration-200 ease-in-out" : "rotate-0 transition-transform duration-200 ease-in-out"}`}/>
            </div>

            {
              openSection === "bed" && (
                <div className='flex flex-col gap-4 w-full text-lg text-text-primary mt-4'>
                  <div className='flex flex-col gap-2 items-start'>
                    <label>Baths</label>
                    <div className='flex gap-0 items-center'>
                      {["Any", "1", "2", "3", "+4"].map((c, index) => (
                        <CountBtn count={c} activeCount={filters.baths} setActiveCount={(val) => setFilters(prev => ({...prev, baths: val})) } key={index}/>
                      ))}
                    </div>
                  </div>
                  
                  <div className='flex flex-col gap-2 items-start'>
                    <label>Beds</label>
                    <div className='flex gap-0 items-center'>
                      {["Any", "1", "2", "3", "+4"].map((c, index) => (
                        <CountBtn count={c} activeCount={filters.beds} setActiveCount={(val) => setFilters(prev => ({...prev, beds: val}))} key={index}/>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
          </div> 

          {/* lease term*/} 
          <div className='border-b-2 border-input pb-6'>
              <div onClick={() => toggleSection("lease")}     className='flex justify-between'>
                  <p className='capitalize text-lg font-medium'>Lease Term</p>
                  <ChevronDown className={`size-6 ${openSection === "lease" ? "rotate-180 transition-transform duration-200 ease-in-out" : "rotate-0 transition-transform duration-200 ease-in-out"}`}/>
                </div>

                {
                  openSection === "lease" && (
                    <div className='flex flex-col gap-3 mt-4'>
                {[
                  { label: "Any", value: "any" },
                  { label: "6 months", value: "6" },
                  { label: "1 year", value: "12" },
                ].map(opt => (
                  <label key={opt.value} className='flex gap-2 items-center'>
                    <input
                      type='radio'
                      name='lease'
                      checked={filters.lease === opt.value}
                      onChange={() => setFilters(prev => ({ ...prev, lease: opt.value }))}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
              )
            }
          </div>

          <button onClick={resetAll} className='underline underline-offset-2 text-lg font-medium text-end'>Reset all</button>

        </div> 
  )
}

export default FilterDropDown