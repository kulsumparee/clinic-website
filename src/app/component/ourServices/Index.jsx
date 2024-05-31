import React from 'react'
import { Para, ServiceContant, Title } from './Styles'
import LineImg from "@/assest/Group.svg"
import Image from 'next/image'
import CardSection from './card'
import ButtonComponent from '../button/Index'

const ServiceSection = () => {
  return (
    <ServiceContant className='  mt-10 '>
      <div className=' text-center'>

        <div className=' items-center flex flex-col '>
          <Title className='  text-[40px] font-bold'>Our Services</Title>
          <Image src={LineImg} alt='images' />
        </div>

        <Para className=' md:mt-10 '>Lorem ipsum dolor sit amet consectetur.
          Faucibus arcu ultrices gravida et dictumst duis
          
          
        </Para>
        <Para>
          gravida odio semper.Integer potenti viverra et interdum lobortis amet nisi lorem.
          Amet
        </Para>
        <Para>
          sed sit risus dictum dolor. Sem enim eget ac morbi placerat.
        </Para>
      </div>
      <div className=''>
        <CardSection />
      </div>
      
      <div className=' flex justify-center'>

      <ButtonComponent/>
      </div>
      
      

      <div>

      </div>

    </ServiceContant>
  )
}

export default ServiceSection
