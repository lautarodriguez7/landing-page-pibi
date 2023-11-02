import {Button} from '@nextui-org/react'
import linkedin from '../../assets/images/linkedin.svg'
import instagram from '../../assets/images/instagram.svg'
import youtube from '../../assets/images/youtube.svg'
import './Footer.css'
import {useState} from 'react'

const Footer = () => {
  const [animationSkill, setAnimationSkills] = useState(false)

  const changeAnimationSkill = () => {
    if (window.scrollY >= 2400) {
      setAnimationSkills(true)
    }
  }
  window.addEventListener('scroll', changeAnimationSkill)

  return (
    <div className="footer-container">
      <div className="footer-center-container">
        <div className="footer-center">
          <div
            className={
              animationSkill
                ? 'footer-center-div animate__slower animate__animated animate__fadeInLeftBig animate__slow'
                : 'hidden'
            }
          >
            <span>¿Querés conocer más sobre la empresa?</span>
          </div>
          <div
            className={
              animationSkill
                ? 'footer-center-div animate__slower animate__animated animate__fadeInLeftBig animate__slow'
                : 'hidden'
            }
          >
            <span style={{width: '50%', fontSize: '14px'}}>
              No sólo creamos PiBI, sino también diseñamos soluciones inteligentes, ayudando a la
              detección de oportunidades de mejora de negocios.
            </span>
          </div>
          <div
            className={
              animationSkill
                ? 'footer-center-div animate__slower animate__animated animate__fadeInLeftBig animate__slow'
                : 'hidden'
            }
          >
            <a href="https://www.piconsulting.com.ar">
              <Button type="submit">Ir a Pi Consulting</Button>
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          animationSkill
            ? 'footer-bottom animate__slower animate__animated animate__fadeInLeftBig animate__slow'
            : 'hidden'
        }
      >
        <div className="container-footer-bottom">
          <h6>Powered by</h6>
          <span>PI DATA STRATEGY & CONSULTING</span>
        </div>
        <div
          className={
            animationSkill
              ? 'flex logo-container animate__slower animate__animated animate__fadeInLeftBig animate__slow'
              : 'hidden'
          }
        >
          <a href="https://www.linkedin.com/company/pi-data-strategy-&-consulting/mycompany/">
            <img src={linkedin} alt="logo" />
          </a>
          <a href="https://www.instagram.com/pidatastrategyconsultingok/">
            <img src={instagram} alt="logo" />
          </a>
          <a href="https://www.youtube.com/@PiDataStrategyConsulting">
            <img src={youtube} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
