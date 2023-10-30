import {Image} from '@nextui-org/react'
import './Benefit.css'
import {useState} from 'react'

const CardBenefictRight = ({title, description, image}) => {
  const [animationSkill, setAnimationSkills] = useState(false)

  const changeAnimationSkill = () => {
    if (window.scrollY >= 1160) {
      setAnimationSkills(true)
    }
  }

  window.addEventListener('scroll', changeAnimationSkill)

  return (
    <div className="container-cardBenefit">
      <div className="description-cardBenefit-container">
        <Image src={image} style={{borderRadius: '100%', width: '100px'}} className="image-icon" />
      </div>
      <div
        className={
          animationSkill
            ? 'text-right animate__slower animate__animated animate__fadeInUp animate__slow'
            : 'hidden'
        }
      >
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default CardBenefictRight
