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
      <NavBar />
      <Sections />
      <Footer />
    </div>
  )
}

export default App
