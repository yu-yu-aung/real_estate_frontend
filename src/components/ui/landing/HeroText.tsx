import SearchBar from "@/components/shared/SearchBar"

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 items-start pr-15 pb-15'>
      <h1 className='font-heading text-[64px] font-bold text-nowrap overflow-visible text-deep-teal-800'>Discover Your <br/> 
      Happy Little Home</h1>
      <p className='font-body text-lg text-deep-teal-900'>
        Discover rentals and homes for sale with us. We offer a wide range of properties and hassle-free browsing.
      </p>
      <SearchBar type='home'/>
    </div>
  )
}

export default HeroText