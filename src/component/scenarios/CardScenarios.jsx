import {Image} from '@nextui-org/react'

const CardScenarios = ({image, description}) => {
  return (
    <div>
      <Image src={image} className="card-scenario" alt="scenario-card" />
      <span>{description}</span>
    </div>
  )
}

export default CardScenarios
