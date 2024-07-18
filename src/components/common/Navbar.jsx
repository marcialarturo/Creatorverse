import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#07baff' : 'white',
  })
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto justify-between flex items-center">
        <NavLink to="/" className="text-white font-bold text-2xl">
          Creatorverse
        </NavLink>
        <div className="">
          <NavLink to="/" style={navLinkStyles} className="text-white mr-6">
            Creators
          </NavLink>
          <NavLink
            to="/add-creator"
            style={navLinkStyles}
            className="text-white mr-6 "
          >
            Add Creator
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
