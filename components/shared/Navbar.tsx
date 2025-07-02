import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="h-[400px] bg-gray-600 w-full relative">
        <Image alt='banner' fill className="object-cover" src="/images/banner.jpg" />
    </div>
  )
}

export default Navbar
