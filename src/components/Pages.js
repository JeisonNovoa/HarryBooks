import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { Home } from './Home'
import { ProductList } from './products'
import { ProductDetail } from './products/ProductDetail'

export const Pages = () => {
  return (
    <section>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    </section>
  )
}
