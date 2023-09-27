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
    <div className="p-5">
      <div className="flex flex-row justify-between items-center text-start p-5 bg-white">
        <div className="pt-5 w-first">
          <h1 className="p-2" style={{fontSize: '25px'}}>
            <b>¿Qué es PiBi?</b>
          </h1>
          <div>
            <p className="p-5">
              PiBi es un sistema de información que permite a los usuarios visualizar información de
              diferentes tecnologías. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              ipsa et iure beatae dolorem dicta ipsam aut. Temporibus voluptatem placeat dolor
              minima
            </p>
          </div>
        </div>
        <div>
          <img src={image} alt="Imagen" className="image-whatIs image" />
        </div>
      </div>
    </div>
  )
}

export default WhatIs
