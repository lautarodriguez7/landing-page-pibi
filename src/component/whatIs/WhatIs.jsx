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
        <p>
          PiBi es un sistema de información que permite a los usuarios visualizar información de
          diferentes tecnologías. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          ipsa et iure beatae dolorem dicta ipsam aut. Temporibus voluptatem placeat dolor minima
        </p>
      </div>
      <div className="w-second">
        <ReactPlayer url={video} height="250px" width="550px" playing={false} />
      </div>
    </div>
  )
}

export default WhatIs
