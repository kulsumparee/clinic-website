import React from 'react'

import LineImg from "@/assest/Group.svg"
import Image from 'next/image'
import SlickCarousel from './marquee/Index'

function PartnersSection() {
    return (
        <div>
            <div className='items-center flex flex-col '>
                <h1 className=" text-5xl font-bold mt-20  mb-6 text-center">Send Us An Inquiry</h1>
                <Image src={LineImg} alt='images'/>
            </div>

            <SlickCarousel/>
        </div>
    )
}

export default PartnersSection
