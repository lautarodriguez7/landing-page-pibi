import {Image} from '@nextui-org/react'
import {useState} from 'react'

const CardScenarios = ({image, description}) => {
  return (
    <div>
      <Image src={image} className="card-scenario" alt="scenario-card" />
      <span className="div-images ">{description}</span>
    </div>
  )
}

export default CardScenarios
