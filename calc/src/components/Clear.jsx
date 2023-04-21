import React from 'react'
import '../App.css'
export default function Clear({children,limpiar}) {
  return (
    <div onClick={limpiar} className='clear-btn'>
        {children}
    </div>
  )
}
