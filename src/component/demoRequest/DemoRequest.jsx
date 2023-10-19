import {Button, Image} from '@nextui-org/react'
import './DemoRequest.css'
import image from '../../assets/images/image1.png'

const DemoRequest = () => {
  return (
    <div className="image-with-text-container image1 animate__animated animate__bounceInDown">
      {/* <Image src={image} alt="Imagen" className="image" /> */}

      <div className="text-overlay flex flex-col">
        <div className="p-demo-container">
          <p className="p-demo">
            Tus informes de <b style={{color: '#FFC000'}}>Power BI</b>
          </p>
          <p className="p-demo">acorde a tus necesidades</p>
        </div>
        <div className="mt-5">
          <Button className="p-5 rounded dark">Solicitá una demo</Button>
        </div>
      </div>
    </div>
  )
}

export default DemoRequest
