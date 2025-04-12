import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from 'C:/Users/allis/OneDrive/Documents/bitcamp-2025/my-react-app/res/grocery icons/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Buttercup Logo" className="logo-image" />
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