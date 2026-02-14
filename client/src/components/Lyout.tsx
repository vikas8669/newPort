// import React, { Children } from 'react'
import NavbarDemo from './Navbar'
import { WavyBackgroundDemo } from './Footer'
// import { Outlet } from 'react-router-dom'


const Lyout = ({ children }:any) => {
  return (
    <>
      <NavbarDemo />
      <main>{children}</main>
      <WavyBackgroundDemo/>
  </>
  )
}

export default Lyout
