import React from 'react'
import imageHome from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/home (1).png'
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
