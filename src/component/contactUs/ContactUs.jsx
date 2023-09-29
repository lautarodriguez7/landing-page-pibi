import './ContactUs.css'
import image from '../../assets/images/image3.png'
import {FormContactUs} from './FormContactUs'
import {useState} from 'react'
import {Image} from '@nextui-org/react'
const ContactUs = () => {
  const [animationSkill, setAnimationSkills] = useState(false)

  const changeAnimationSkill = () => {
    if (window.scrollY >= 1800) {
      setAnimationSkills(true)
    }
  }

  window.addEventListener('scroll', changeAnimationSkill)
  return (
    <div className="image-with-text-container">
      <Image src={image} alt="Imagen" className="image" />
      <div className="container-title-contactUs text-overlay">
        <FormContactUs />
        <div className="flex flex-col justify-center items-center p-5 w-full h-full bg-black bg-opacity-50 container-title-contactUs">
          <h1
            className={
              animationSkill
                ? 'animate__slower px-4 animate__animated animate__fadeInUp animate__slow title-contactUs'
                : 'hidden'
            }
            style={{color: '#FFC000'}}
          >
            ¿No sabés por dónde empezar?
          </h1>
          <span
            className={
              animationSkill
                ? 'animate__slower container-scenarios animate__animated animate__fadeInUp animate__slow span-contactUs'
                : 'hidden'
            }
          >
            Comenza probando nuestro producto.
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
