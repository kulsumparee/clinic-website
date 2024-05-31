import React from 'react'
import { ClinicContant, Para, Title } from './Styles'
import LineImg from "@/assest/Group.svg"
import Image from 'next/image'
import SlickCarousel from '../slider/Styles'


const ClinicSection = () => {
    return (
      

        
      <ClinicContant className=''>
      <div className=' text-center'>

          <div className=' items-center flex flex-col '>
              <Title className='  text-[40px] font-bold'>Our Clinic</Title>
              <Image src={LineImg}  alt='image'/>
          </div>

    
            </div>
            <div className=' p-10 '>
               

                <SlickCarousel/>
                
            </div>
            </ClinicContant>
        
    
  )
}

export default ClinicSection
