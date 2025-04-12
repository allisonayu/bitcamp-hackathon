import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Avatar from './Avatar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </div>
  )
}

export default App