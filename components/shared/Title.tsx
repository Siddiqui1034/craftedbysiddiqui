import React, { FC, ReactNode } from 'react'
import Line from './Line'
interface TitleInterface{
  title: string
  children?: ReactNode
  className?: string
}

const Title:FC<TitleInterface> = ({title, children, className}) => {
  return (
    <>
    <div className={`flex items-center gap-5 ${className || ''}`}>     
      <p className="font-rajdhani text-lg font-bold capitalize">{title}</p>
      <div>
        <Line />
      </div> 
    </div>
    
    {children && children}
    </>
  )
}

export default Title
