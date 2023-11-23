import React from 'react'
import Navabar from './Navabar'
import Footer from './Footer'
interface LayoutProps {
   children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
   return (
      <>
         <Navabar />
         {children}
         <Footer />
      </>
   )
}

export default Layout