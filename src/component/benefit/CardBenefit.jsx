import {Image} from '@nextui-org/react'
import './Benefit.css'
import {useState} from 'react'

const CardBenefit = (props) => {
  const {title, description, image} = props
  return (
    <div className="container-cardBenefit">
      <div className="text-l">
        <div>
          <h1>{title}</h1>
        </div>
        <span>{description}</span>
      </div>
      <div className="description-cardBenefit-container">
        <Image src={image} style={{borderRadius: '100%', width: '100px'}} className="image-icon" />
      </div>
    </div>
  )
}

export default CardBenefit
