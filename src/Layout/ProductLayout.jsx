import React from 'react'
import { Outlet } from 'react-router-dom'
import Products from '../Pages/Products'

const ProductLayout = () => {
  return (
      <div className="container">
         
        <Outlet/>
      </div>
  )
}

export default ProductLayout