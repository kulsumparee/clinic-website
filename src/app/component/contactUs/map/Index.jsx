import React from 'react'
import Image from 'next/image'
import LineImg from "@/assest/Group.svg"
import map from "@/assest/Full Map.svg"
import { Container } from './Styles'
import ContactFooter from '../footer/Index'


const ContactSection = () => {
  return (
    <Container className='   mt-20'>

      <div className=' flex flex-col items-center text-center  '>
        <h1 className=' mt-10    text-[40px] font-bold'>Contact Us</h1>
        <Image src={LineImg} alt='img'/>
      </div>
      <div className=' px-14 mt-20 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3    '>
        <div>
          <Image src={map} alt='icons' />
          <ContactFooter />
       </div>
        <div>
          <Image src={map} alt='icons' />
          <ContactFooter />
        </div>
        <div>

          <Image src={map} alt='icons' />
          <ContactFooter />
        </div>
      </div>

      <div className=' md:grid md:grid-cols-3 sm:grid-cols-1 sm:items-center'>
        
        
       
       
       
      </div>
    
    </Container>

  )
}

export default ContactSection

