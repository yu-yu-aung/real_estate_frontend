'use client'

import Button from '@/components/shared/Button'
import { blogCategories } from '@/constants/blogCategories'
import React, { useState } from 'react'
import CatBtn from './CatBtn'

const BlogCategoryBar = () => { 
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className='flex gap-6 overflow-hidden'>
      {blogCategories.map((c) => (
        <CatBtn category={c.name} key={c.id} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      ))}
    </div>
  )
}

export default BlogCategoryBar