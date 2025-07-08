import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { FC } from 'react'

interface WorkCardInterface{
  image: string 
}

const WorkCard:FC<WorkCardInterface> = ({image}) => {
  return (
      <div className="relative w-full h-[100%] aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
              {/* Background Image */}
              <Image
                src={image}
                alt="Portfolio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
    
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-rose-600/60 to-rose-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
              {/* Text Content */}
              <div className=" space-y-4 absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition duration-300 text-white">
                <p className="text-sm font-medium">Development</p>
                <p className="text-2xl font-xl font-bold text-white hover:text-rose-600">
                  My Portfolio of Innovation
                </p>
              </div>
    
              {/* Top-right Icon */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-10 h-10 flex items-center justify-center border border-white rounded-md">
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="w-5 h-5 text-white"
                  />
                </div>
              </div>
            </div>
  )
}

export default WorkCard
