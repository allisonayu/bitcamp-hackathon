import React from 'react'
import './Home.css'
import imageHome from 'C:/Users/allis/OneDrive/Documents/bitcamp-2025/my-react-app/res/grocery icons/home.png'

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${imageHome})` }}
    >
      <h1>Welcome to Buttercup Corner</h1>
    </div>
  )
}

export default Home