import {Image} from '@nextui-org/react'
import image from '../../assets/images/Analytics process_Isometric 1.svg'
import './HowItWorks.css'
import {useState, useEffect} from 'react'

const HowItWorks = () => {
  const [animationSkill, setAnimationSkills] = useState(false)
  const changeAnimationSkill = () => {
    if (window.scrollY >= 160) {
      setAnimationSkills(true)
    }
  }

  window.addEventListener('scroll', changeAnimationSkill)

  return (
    <div className="howItWorks-container dark text-foreground">
      <div className="first ">
        <ul
          className={
            animationSkill ? 'animate__animated animate__fadeInLeftBig animate__slow' : 'hidden'
          }
        >
          <h1 className="p-1">
            <b>¿Cómo funciona?</b>
          </h1>
          <li>
            Para que PiBi pueda leer los informes de PowerBi de nuestra organización, es necesario
            crear un puente entre PiBi (nuestro tenant) y su tenant de Azure.{' '}
          </li>
          <li>
            Para ello necesitamos una licencia por capacidad de PowerBi (puede ser Embedded, Premium
            o Fabric) y una aplicación registrada junto a unos permisos.{' '}
          </li>
          <li>
            Los datos de la aplicación se cargan en PiBi y el puente estará creado. Finalmente los
            usuarios de PiBi pueden ingresar a la plataforma para ver sus informes asignados de
            varios tipos de login como registro tradicional, sso google o sso microsoft.
          </li>
        </ul>
      </div>
      <div className="second">
        <Image
          src={image}
          alt="Imagen"
          className={animationSkill ? 'animate__animated animate__fadeInDown' : 'hidden'}
          width={350}
          isZoomed
        />
      </div>
    </div>
  )
}

export default HowItWorks
