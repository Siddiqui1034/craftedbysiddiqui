import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full relative h-[250px] md:h-[400px] bg-gray-600">
        <Image 
          fill 
          className='object-cover'
          alt='banner' 
          src="/images/banner.jpg"
        />
    </div>
  )
}

export default Navbar

//  <Card
//       hoverable
//       cover = {
//         <div className="relative w-full h-[180px]">
//             <Image 
//               src="" 
//               layout="fill" 
//               alt=""
//               objectFit='cover'
//             />
//         </div>
//       }
//     >
