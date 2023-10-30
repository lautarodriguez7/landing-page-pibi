import {Image} from '@nextui-org/react'
import {useState} from 'react'

const CardScenarios = ({image, description}) => {
  const [animationSkill, setAnimationSkills] = useState(false)
  const changeAnimationSkill = () => {
    if (window.scrollY >= 700) {
      setAnimationSkills(true)
    }
  }

  window.addEventListener('scroll', changeAnimationSkill)

  return (
    <div>
      <Image src={image} className="card-scenario" alt="scenario-card" />
      <span
        className={
          animationSkill
            ? 'div-images container-scenarios animate__animated animate__fadeInUp animate__slow'
            : 'hidden'
        }
      >
        {description}
      </span>
    </div>
  )
}

export default CardScenarios
