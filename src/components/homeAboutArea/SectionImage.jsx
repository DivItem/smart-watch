import React from 'react'
import Image from '../../assets/img/about-img.jpg'

export default function SectionImage() {
  return (
    <div className="col-lg-6 no-padding home-about-left">
        <img className="img-fluid" src={Image} alt="Image" />
    </div>
  )
}
