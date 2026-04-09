"use client"

import React, { useState } from 'react'

type Props = {
  category: string;
  activeCategory: string; 
  setActiveCategory: (category: string) => void; 
}

const CatBtn = ({category, activeCategory, setActiveCategory}: Props) => {

  return (
    <button onClick={() => setActiveCategory(category)} className={`text-center px-4 py-2 border border-input rounded-sm bg-card text-sm text-text-primary hover:bg-popover capitalize ${activeCategory === category ? "bg-deep-teal-100 border-sm transition-transform duration-100" : ""}`}>
      {category}
    </button>
  )
}

export default CatBtn