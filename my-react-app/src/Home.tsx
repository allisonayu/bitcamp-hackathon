import React from 'react'
import imageHome from 'C:/Users/allis/OneDrive/Documents/bitcamp-2025/my-react-app/res/grocery icons/home.png'
import './Home.css'

function Home() {
  return (
    <div className="container"> 
        <img src = {imageHome} className="my-photo" alt="Centered image"></img>
        <h1> Welcome to Buttercup Corner</h1>
    </div>
  )
}

export default Home