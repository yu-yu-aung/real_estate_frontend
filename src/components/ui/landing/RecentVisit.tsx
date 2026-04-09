import React from 'react'
import Button from '../../shared/Button'
import Card from '../../shared/Card'
import { CardTypes } from '@/types/CardTypes'

const recentVisits: CardTypes[] = [
  { 
    id: 1,
    title: "Villa For SlashSquare", 
    price: 10000, 
    type: "rent",
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }, 
  { 
    id: 2,
    title: "Villa For SlashSquare", 
    price: 1000,
    type: "sale",
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }, 
  { 
    id: 3,
    title: "Villa For SlashSquare", 
    price: 10000,
    type: "rent",
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }, 
  { 
    id: 4,
    title: "Villa For SlashSquare", 
    price: 100,
    type: "sale",
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

            <Card variant="horizontal" title={v.title} type={v.type} price={v.price} imageUrl={v.imageUrl} tags={v.tags} facts={v.facts} address={v.address} id={v.id}/>
          </div>
        ))}
      </div>
      <div className='mx-auto mb-15'>
        <Button variant='ghost' text='Load More'/>
      </div>
      <hr className='w-full text-tertiary'></hr>
    </section>
  )
}

export default RecentVisit