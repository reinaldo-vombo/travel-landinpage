import React from 'react'
import { ButtonProps } from '../interface/button'
import { StaticImage } from 'gatsby-plugin-image'

const Button = ({ title, type, variant, full, icon, className }: ButtonProps) => {
   return (
      <button className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} ${className}`} type={type}>
         {icon && <img src={icon} alt={title} width={24} height={24} />}
         <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      </button>
   )
}

export default Button