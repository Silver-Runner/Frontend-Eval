import React from 'react'
import { Strings } from '../constants'

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-gray-400 h-15  w-full ">
    <h1 className="text-2xl font-bold text-center flex items-center">
        {Strings.FOOTER_TEXT}
    </h1>
  </div>
  )
}

export default Footer
