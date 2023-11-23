import React from 'react'
import Layout from './src/components/Layout'
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
   return (
     <Layout>
       {element}
     </Layout>
   )
 }