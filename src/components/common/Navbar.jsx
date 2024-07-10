import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="header">
      <h1>Creatorverse</h1>
      <Link to="/creators">Creators</Link> <br />
      <Link to="/add-creator">Add Creator</Link>
    </div>
  )
}
