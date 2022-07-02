import React from 'react'
import Image from 'react-bootstrap/esm/Image'
import ViperMini from "../../assets/images/viper-mini.jpg"

const DetailImage = () => {
  return (
    <div>
        <div>
            <Image src={ViperMini} style={ImgSize}/>
        </div>
    </div>
  )
}

const ImgSize = {
    width: "436px",
    height: "555px",
    objectFit: "cover"
}

export default DetailImage