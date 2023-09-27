import {Image} from '@nextui-org/react'

const CardScenarios = ({image, description}) => {
  return (
    <div>
      <Image src={image} style={{width: '120px', margin: '1rem'}} alt="scenario-card" />
      <span>{description}</span>
    </div>
  )
}

export default CardScenarios
