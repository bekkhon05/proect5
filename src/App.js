import React from 'react'
import Navbar from './companents/navbar'
import About from './page/about'
import Category from './page/category/Category'
import Home from './page/home'
import Listing from './page/listing'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Category/>
      <Listing/>
      <About/>
    </div>
  )
}

export default App