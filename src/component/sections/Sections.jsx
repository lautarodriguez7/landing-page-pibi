import {NavBar, DemoRequest, WhatIs, HowItWorks, Scenarios, Benefit, ContactUs} from '../'

const Sections = () => {
  return (
    <div>
      <section id="demo-request">
        <DemoRequest />
      </section>
      <section id="what-is">
        <WhatIs />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="scenarios">
        <Scenarios />
      </section>
      <section id="benefit">
        <Benefit />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
    </div>
  )
}

export default Sections
