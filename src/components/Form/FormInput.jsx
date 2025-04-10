import React from 'react'
import { paragraph } from "../../styles/styles"

const FormInput = ({type, placeholder, error, func}) => {
  return (
    <div className="flex flex-col text-left">
      <input
        {...func}
        type={type}
        placeholder={placeholder}
        className={`w-full h-10 sm:h-12 px-4 bg-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${paragraph}`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error.message}</span>}
    </div>
  )
}

export default FormInput