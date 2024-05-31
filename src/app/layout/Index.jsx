import React from 'react'
import NavBar from '../component/navBar/Index'
import FooterSection from '../component/footer/Index'

const LayoutComponent = (props) => {
  return (
    <div>
      <NavBar />

      {props.children}

      <FooterSection/>
      
    </div>
  )
}

export default LayoutComponent
