import React from 'react'
import Button from '../../shared/Button'
import Card from '../../shared/Card'
import { CardTypes } from '@/types/CardTypes'
import ArrowButton from '../../shared/ArrowButton'

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

const NewRent = () => {
  return (
     <section className='flex flex-col gap-16 items-start w-full px-15 py-15'>
      <h3 className='capitalize font-heading font-semibold text-[48px]'>Newest Listing for rent</h3>
      <div className='grid grid-cols-4 gap-7.5 w-full'>
        {recentVisits.map((v) => (
          <div  key={v.id} className='col-span-1'> 

            <Card variant="vertical" title={v.title} type={v.type} price={v.price} imageUrl={v.imageUrl} tags={v.tags} facts={v.facts} address={v.address}/>
          </div>
        ))}
      </div>
      <div className='ml-auto mb-15'>
        <ArrowButton/>
      </div>
      <hr className='w-full text-tertiary'></hr>
    </section>
  )
}

export default NewRent