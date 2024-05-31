
import React from 'react'
import { Container, Title } from './Styles'
import LineImg from "@/assest/Group.svg"
import Image from 'next/image'
import Accordion from '../accordian/Index'

const FaqsSection = () => {
    return (
        <Container>

            <div className=' text-center'>

                <div className=' items-center flex flex-col '>
                    <Title className='  text-[40px] font-bold'>FAQs</Title>
                    <Image src={LineImg} alt='logo' className=' w-64' />
                </div>


            </div>
            <Accordion/>
        </Container>
    )
}

export default FaqsSection
