import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range';
import CountBtn from './CountBtn';

type Props = {
  showFilter: boolean; 
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
} 

const MIN = 0; 
const MAX = 1000000;

const FilterDropDown = ({showFilter, setShowFilter} : Props) => {

  const [values, setValues] = useState([100000, 500000]); 
  const [showPrice, setShowPrice] = useState(false); 
  const [showType, setShowType] = useState(false); 
  const [showBed, setShowBed] = useState(false); 

  const [activeCount, setActiveCount ] = useState(0); 

  if (!showFilter) return null; 
  return (
    <> 
      {showFilter &&
        <div className='flex flex-col gap-3 p-6 shadow-lg w-99 rounded-sm bg-background'>

          {/* price  */}
          <div className='border-b-2 border-input pb-6'>
            <div onClick={() => setShowPrice(!showPrice)} className='flex justify-between'>
              <p className='capitalize text-lg font-medium'>Price</p>
              <ChevronDown className={`size-6 ${showPrice ? "rotate-180 transition-transform duration-200 ease-in-out" : "rotate-0 transition-transform duration-200 ease-in-out"}`}/>
            </div>

            {
              showPrice && (
                <div className='flex flex-col gap-4 w-full'>
              {/* Slider */}
              <Range
                values={values}
                step={10000}
                min={MIN}
                max={MAX}
                onChange={(vals) => setValues(vals)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-2 mt-8 w-full rounded bg-gray-200"
                    style={{
                      background: getTrackBackground({
                        values,
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
                    value={values[0]}
                    readOnly
                    className="border border-input bg-card px-4 py-2 text-lg w-full"
                  />
                </div>

                <div className="flex flex-col gap-1 items-start">
                  <label className="text-sm text-text-primary">Maximum (MMK)</label>
                  <input
                    type="number"
                    value={values[1]}
                    readOnly
                    className="border border-input bg-card px-4 py-2 text-lg w-full"
                  />
                </div>
              </div> 

              <p onClick={() => setValues([MIN, MAX])} className='underline underline-offset-2 text-lg font-medium text-end'>Remove mini and maxi price</p>
            </div>
              )
            }
          </div>
          
          {/* House Type */} 
          <div className='border-b-2 border-input pb-6'>
            <div onClick={() => setShowType(!showType)} className='flex justify-between'>
              <p className='capitalize text-lg font-medium'>House Type</p>
              <ChevronDown className={`size-6 ${showType ? "rotate-180 transition-transform duration-200 ease-in-out" : "rotate-0 transition-transform duration-200 ease-in-out"}`}/>
            </div>

            {
              showType && (
                <div className='flex flex-col gap-4 w-full text-lg text-text-primary mt-4'>
                  <div className='flex gap-2 justify-start items-center'>
                    <input type='checkbox' value="house" className='bg-input'/> 
                    <label>House</label>
                  </div>
                  <div className='flex gap-2 justify-start items-center'>
                    <input type='checkbox' value="apartment"/> 
                    <label>Apartment/Condo</label>
                  </div>
                  <div className='flex gap-2 justify-start items-center'>
                    <input type='checkbox' value="townhouse"/> 
                    <label>Townhouse</label>
                  </div>
                </div>
              )
            }
          </div> 

          {/* baths abd beds*/} 
          <div className='border-b-2 border-input pb-6'>
            <div onClick={() => setShowBed(!showBed)} className='flex justify-between'>
              <p className='capitalize text-lg font-medium'>Beds &amp; Baths</p>
              <ChevronDown className={`size-6 ${showBed ? "rotate-180 transition-transform duration-200 ease-in-out" : "rotate-0 transition-transform duration-200 ease-in-out"}`}/>
            </div>

            {
              showBed && (
                <div className='flex flex-col gap-4 w-full text-lg text-text-primary mt-4'>
                  <div className='flex gap-2 justify-start items-center'>
                    <label>House</label>
                    <div>
                      <CountBtn count={1} activeCount={activeCount} setActiveCount={setActiveCount}/>
                    </div>
                  </div>
                  <div className='flex gap-2 justify-start items-center'>
                    <input type='checkbox' value="apartment"/> 
                    <label>Apartment/Condo</label>
                  </div>
                  <div className='flex gap-2 justify-start items-center'>
                    <input type='checkbox' value="townhouse"/> 
                    <label>Townhouse</label>
                  </div>
                </div>
              )
            }
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      }
    </>
    
  )
}

export default FilterDropDown