import {Toaster} from 'react-hot-toast'
import './App.css'
import {
  NavBar,
  DemoRequest,
  WhatIs,
  HowItWorks,
  Scenarios,
  Benefit,
  ContactUs,
  Footer,
} from './component'
import Sections from './component/sections/Sections'

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={true} />
      <NavBar />
      <Sections />
      <Footer />
    </div>
  )
}

export default App
