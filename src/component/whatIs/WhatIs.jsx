import ReactPlayer from 'react-player'
import image from '../../assets/images/pibi-image1.png'
import './WhatIs.css'
const WhatIs = () => {
  const video = 'https://www.youtube.com/watch?v=bRT_530g9pE&t=1s'
  return (
    // <div className="p-5">
    <div className="whatIs-container">
      <div className="w-first">
        <h1 className="" style={{fontSize: '25px'}}>
          <b>¿Qué es PiBi?</b>
        </h1>
        <p style={{fontSize: '16px'}}>
          PiBi es una plataforma web como servicio (SaaS) como portal de inteligencia de negocios
          integrada como solución de tecnología Power Bi Embedded. Una construcción que interactúa
          con tu entorno de Azure y te permite distribuir informes de PowerBi de manera segura,
          simple y eficiente.
        </p>
      </div>
      <div className="w-second">
        <ReactPlayer url={video} height="auto" width="100%" playing={false} />
      </div>
    </div>
  )
}

export default WhatIs
