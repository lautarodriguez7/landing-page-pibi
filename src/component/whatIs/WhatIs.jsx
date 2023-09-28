import {useState} from 'react'
import image from '../../assets/images/pibi-image1.png'
import './WhatIs.css'

const WhatIs = () => {
  const [animationSkill, setAnimationSkills] = useState(false)
  const changeAnimationSkill = () => {
    if (window.scrollY >= 20) {
      setAnimationSkills(true)
    }
  }

  window.addEventListener('scroll', changeAnimationSkill)

  return (
    // <div className="p-5">
    <div className="whatIs-container">
      <div className="w-first">
        <h1 className="" style={{fontSize: '25px'}}>
          <b>¿Qué es PiBi?</b>
        </h1>
        <div>
          <p className="">
            PiBi es un sistema de información que permite a los usuarios visualizar información de
            diferentes tecnologías. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            ipsa et iure beatae dolorem dicta ipsam aut. Temporibus voluptatem placeat dolor minima
          </p>
        </div>
      </div>
      <div className="w-second">
        <img src={image} alt="Imagen" className="image-whatIs image" />
      </div>
    </div>
    // </div>
  )
}

export default WhatIs
