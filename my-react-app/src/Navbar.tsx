import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Buttercup Corner
      </div>
      <div className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/avatar">🍡 Avatar</Link>
      </div>
    </nav>
  )
}

export default Navbar