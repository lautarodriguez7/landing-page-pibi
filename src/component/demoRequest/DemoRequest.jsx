import {Button, Image} from '@nextui-org/react'
import './DemoRequest.css'
import {Link} from 'react-scroll'

const DemoRequest = () => {
  return (
    <div className="image-with-text-container container-demo-request image1 animate__animated animate__bounceInDown">
      <div className="flex flex-col container-div-demoRequest">
        <div className="p-demo-container">
          <p className="p-demo">
            Tus informes de <b style={{color: '#FFC000'}}>Power BI</b>
          </p>
          <p className="p-demo">acorde a tus necesidades</p>
        </div>
        <div className="mt-5">
          <Button className="p-5 rounded dark">
            <Link to="contact-us" spy={true} smooth={true} color="grey">
              Solicitá una demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DemoRequest
