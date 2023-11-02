import './ContactUs.css'
import image from '../../assets/images/image3.png'
import {FormContactUs} from './FormContactUs'
import {useState} from 'react'
import {Image} from '@nextui-org/react'
import {color} from 'framer-motion'
const ContactUs = () => {
  const [animationSkill, setAnimationSkills] = useState(false)

  const changeAnimationSkill = () => {
    if (window.scrollY >= 1800) {
      setAnimationSkills(true)
    }
  }

  window.addEventListener('scroll', changeAnimationSkill)
  return (
    <div className="image-with-text-container image2">
      <div className="container-form">
        <div className="container-title-contactUs">
          <div className="flex flex-col justify-center items-center p-5 w-full h-full bg-black bg-opacity-50 container-title-contactUs">
            <h1
              className={
                animationSkill
                  ? 'animate__slower px-4 animate__animated animate__fadeInLeftBig animate__slow title-contactUs'
                  : 'hidden'
              }
              style={{color: '#FFC000', fontSize: '25px', marginTop: '3rem'}}
            >
              ¿No sabés por dónde empezar?
            </h1>
            <span
              style={{fontSize: '14px', fontWeight: '800'}}
              className={
                animationSkill
                  ? 'animate__slower container-scenarios animate__animated animate__fadeInLeftBig animate__slow span-contactUs'
                  : 'hidden'
              }
            >
              <b style={{color: '#fff'}}>Comenza probando nuestro producto.</b>
            </span>
          </div>
          <div className="container-div-formContactUs">
            <FormContactUs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
