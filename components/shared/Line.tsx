import Image from 'next/image'
import React from 'react'

const Line = () => {
  return (
     <Image alt='line'
            width={80}
            height={80}            
            src="/images/custom-line.png"
            className="filter brightness-80"
    />
  )
}

export default Line
