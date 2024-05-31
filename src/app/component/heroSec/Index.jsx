import React from 'react'
import Image from 'next/image'
import Hero from "@/assest/heroimage.svg"
import styled from 'styled-components'
import { HeroContainer, HeroContant } from './Styled'

const HeroSection = () => {


  return (
    <HeroContainer>
      <Image src={Hero}  alt='image'/>
      <HeroContant>

      </HeroContant>

      <div className=' absolute left-10 bottom-14 text-white '>
        <h1 className=' md:text-[2rem] lg:text-[3rem] xl:text-[4rem]  italic font-normal'>HEALTH IS</h1>
        <h1 className=' md:text-[2rem] lg:text-[3rem] xl:text-[74px] font-bold  '>LOVE, COMPASSION</h1>
        <h1 className=' md:text-[2rem] lg:text-[3rem] xl:text-[4rem]  italic font-normal'>AND CARE</h1>
      </div>
      
    </HeroContainer>
  )
}

export default HeroSection
