'use client'

import React, { useState } from 'react'

const LanguageToggle = () => {
  const [language, setLanguage] = useState<'eng' | 'mm'>('eng')

  return (
    <div className='flex bg-accent items-center justify-between rounded-4xl text-lg text-heading'>
      <button
        onClick={() => setLanguage('eng')}
        className={`${
          language === 'eng' ? 'text-background bg-primary' : ''
        } py-1 px-4 rounded-4xl`}
      >
        Eng
      </button>

      <button
        onClick={() => setLanguage('mm')}
        className={`${
          language === 'mm' ? 'text-background bg-primary' : ''
        } py-1 px-4 rounded-4xl`}
      >
        Mm
      </button>
    </div>
  )
}

export default LanguageToggle