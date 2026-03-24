import React from 'react'
import VisitCard from './VisitCard'
import { id } from 'zod/locales'

const recentVisits = [
  { 
    id: 1,
    title: "Villa For SlashSquare", 
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }, 
  { 
    id: 2,
    title: "Villa For SlashSquare", 
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }, 
  { 
    id: 3,
    title: "Villa For SlashSquare", 
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }, 
  { 
    id: 4,
    title: "Villa For SlashSquare", 
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }
]

const RecentVisit = () => {
  return (
     <section className='flex flex-col gap-16 items-start w-full px-15 py-15'>
      <h3 className='capitalize font-heading font-semibold text-[48px]'>Recent Visits</h3>
      <div className='grid grid-cols-2 gap-7.5 w-full'>
        {recentVisits.map((v) => (
          <div  key={v.id} className='col-span-1'> 
            <VisitCard title={v.title} imageUrl={v.imageUrl} tags={v.tags} facts={v.facts} address={v.address}/>
          </div>
        ))}
      </div>
      <button className='text-center px-8 py-4 border border-primary rounded-md mx-auto mb-15' >Load More</button>
      <hr className='w-full text-gray-600'></hr>
    </section>
  )
}

export default RecentVisit