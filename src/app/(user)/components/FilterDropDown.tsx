import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range';

type Props = {
  showFilter: boolean; 
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
} 

const MIN = 0; 
const MAX = 1000000;

const FilterDropDown = ({showFilter, setShowFilter} : Props) => {

  const [values, setValues] = useState([100000, 500000]); 

  const handlePriceRange = () => {

  }

  if (!showFilter) return null; 
  return (
    <>
      {showFilter &&
        <div className='flex flex-col gap-3 p-6 shadow-lg w-99 rounded-sm bg-card'>

          {/* price  */}
          <div className='border-b-2 border-input pb-6'>
            <div className='flex justify-between'>
              <p className='capitalize text-lg font-medium'>Price</p>
              <ChevronDown className='size-6'/>
            </div>

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

              <p className='underline underline-offset-2 text-lg font-medium text-end'>Remove mini and maxi price</p>
            </div>
            
            

            
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