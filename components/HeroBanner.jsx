import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <img src={urlFor(heroBanner.image)} alt = 'beach' className='hero-banner-image'/>
    </div>
  )
}

export default HeroBanner
