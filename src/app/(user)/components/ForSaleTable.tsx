
import { CardTypes } from '@/types/CardTypes'
import Card from '@/components/shared/Card'
import Pagination from './Pagination'

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
  }, 
  { 
    id: 5,
    title: "Villa For SlashSquare", 
    price: 10000, 
    type: "rent",
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }, 
  { 
    id: 6,
    title: "Villa For SlashSquare", 
    price: 1000,
    type: "sale",
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }, 
  { 
    id: 7,
    title: "Villa For SlashSquare", 
    price: 10000,
    type: "rent",
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }, 
  { 
    id: 8,
    title: "Villa For SlashSquare", 
    price: 100,
    type: "sale",
    imageUrl: "/assets/visit.png", 
    tags: ["Pyin Oo Lwin", "Villa", "Pet friendly"],
  address: "6th Quarter, Anawrahta street, PyinOoLwin, Mandalay",
  facts: ["4 beds", "2 baths", "1650 sq-ft"],
  }
] 

const ForSaleTable = () => {
  return (
     <section className='flex flex-col gap-7.5 items-start w-full mb-15'>
      <h3 className='capitalize font-heading font-semibold text-[48px]'>Real estate & homes for sale</h3>
      <div className='grid grid-cols-4 gap-7.5 w-full'>
        {recentVisits.map((v) => (
          <div  key={v.id} className='col-span-1'> 

            <Card variant="vertical" title={v.title} type={v.type} price={v.price} imageUrl={v.imageUrl} tags={v.tags} facts={v.facts} address={v.address}/>
          </div>
        ))}
      </div>
      <div className='mx-auto mb-15 mt-8'>
        <Pagination/>
      </div>
    </section>
  )
}

export default ForSaleTable