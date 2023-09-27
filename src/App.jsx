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

function App() {
  return (
    <div className="App">
      <NavBar />
      <DemoRequest />
      <WhatIs />
      <HowItWorks />
      <Scenarios />
      <Benefit />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
