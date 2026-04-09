import React from 'react'
import BlogCategoryBar from './BlogCategoryBar'
import Pagination from './Pagination'
import { blogContents } from '@/constants/blogContents'
import BlogCard from './BlogCard'
import { id } from 'zod/locales'

type Props = {}

const BlogSection = (props: Props) => {
  return (
    <section className='flex flex-col gap-14 px-15 mt-16 items-start mb-15'>
      <BlogCategoryBar/>
      <div className='grid grid-cols-3 w-full gap-7.5 '>
        {blogContents.map((b) => (
          <BlogCard imageUrl={b.imageUrl} category={b.category} title={b.title} intro={b.intro} time={b.time} key={b.id} id={b.id}/>
        ))}
      </div>
      <div className='mx-auto mb-15 mt-8'>
        <Pagination/>
      </div>
    </section>
  )
}

export default BlogSection