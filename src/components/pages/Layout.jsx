import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
