import {Image} from '@nextui-org/react'
import './Benefit.css'
import {useState} from 'react'

const CardBenefictRight = ({title, description, image}) => {
  return (
    <div className="container-cardBenefit">
      <div className="description-cardBenefit-container">
        <Image src={image} style={{borderRadius: '100%', width: '100px'}} className="image-icon" />
      </div>
      <div className="text-right">
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default CardBenefictRight
