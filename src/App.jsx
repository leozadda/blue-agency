import { useState } from 'react'
import Header from './Components/Header'
import TopBar from './Components/TopBar'
import WhatWeDo from './Components/WhatWeDo'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import "./App.css"

function App() {

  return (
    <div className='app'>
      <TopBar/>
      <Header/>
      <WhatWeDo/> 
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
