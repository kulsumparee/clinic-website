"use client"
import React from 'react'
import LayoutComponent from '../layout/Index'
import ContactSection from '../component/contactUs/map/Index'


const ContactUs = () => {
  return (
    <div>
      <LayoutComponent>
        <div className=' py-[100px] bg-slate-500'>
          < ContactSection/>
 
        </div>
      </LayoutComponent>  
    </div>
  )
}

export default ContactUs
