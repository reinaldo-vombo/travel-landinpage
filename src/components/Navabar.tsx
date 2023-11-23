import React from 'react'
import { Link } from 'gatsby'
import { NAV_LINKS } from '../constants'
import Button from './Button'
import { logo, menu, user } from '../images'

const Navabar = () => {

   return (
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
         <Link to='/'>
            <img src={logo} alt="logo" width={74} height={29} />
         </Link>

         <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
               <Link to={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
               </Link>
            ))}
         </ul>

         <div className="lg:flexCenter hidden">
            <Button
               type="button"
               title="Login"
               icon={user}
               variant="btn_dark_green"
            />
         </div>

         <img
            src={menu}
            alt="menu"
            loading='lazy'
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
         />
      </nav>
   )
}

export default Navabar