import React from 'react'
import './Home.css'
import imageHome from '/res/grocery icons/home.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${imageHome})` }}
    >
      <h1>Welcome to Buttercup Corner</h1>
      <p>Create your own food-themed friend!</p>
      <div className="nav-links">
        <Link to="/avatar">✨ START DESIGNING ✨</Link>
      </div>
    </div>
  )
}

export default Home