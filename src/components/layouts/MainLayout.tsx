import React, { Children } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

type Props={
  children: React.ReactNode;
};

const MainLayout = ({children}: Props) => {
  return (
    <>
      <Header/> 
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout