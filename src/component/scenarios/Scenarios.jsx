import './Scenarios.css'
import image1 from '../../assets/images/2124299_app_document_report_essential_icon 1.svg'
import image2 from '../../assets/images/5355692_code_coding_development_programming_web_icon 1.svg'
import image3 from '../../assets/images/Group 5.svg'
import CardScenarios from './CardScenarios'
import {useState} from 'react'

const Scenarios = ({image, description}) => {
  const [animationSkill, setAnimationSkills] = useState(false)
  const changeAnimationSkill = () => {
    if (window.scrollY >= 560) {
      setAnimationSkills(true)
    }
  }

  window.addEventListener('scroll', changeAnimationSkill)

  return (
    <div className="container-scenarios">
      <h1
        className={
          animationSkill
            ? 'text-center animate__slower animate__animated animate__fadeInUp animate__slow'
            : 'hidden'
        }
      >
        Escenarios frecuentes
      </h1>
      <div
        className={
          animationSkill
            ? 'div-images container-scenarios animate__animated animate__fadeInUp animate__slow'
            : 'hidden'
        }
      >
        <div className="images">
          <CardScenarios
            description="Posibilidad de compartir informes con usuarios externos"
            image={image1}
          />
        </div>
        <div className="images">
          <CardScenarios description="Cantidad ilimitada de Key users" image={image2} />
        </div>
        <div className="images">
          <CardScenarios
            description="Posibilidad de compartir informes con usuarios externos"
            image={image3}
          />
        </div>
      </div>
    </div>
  )
}

export default Scenarios
