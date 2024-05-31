import React from 'react'
import LineImg from "@/assest/Group.svg"
import Image from 'next/image'

import { Para, Title, TeamContant } from './Styled'
import TeamCards from '../cards/Index'

const TeamComponent = () => {
    return (
        <TeamContant>
            <div className=' text-center'>

                <div className=' items-center flex flex-col '>
                    <Title className=' sm:text-lg md:text-2xl  xl:text-[40px] font-bold'>Meet Our Team</Title>
                    <Image src={LineImg} alt='image' className=' w-[20%]' />
                </div>

                <Para className=' mt-10  sm:text-sm md:text-sm xl:text-xl '>Lorem ipsum dolor sit amet consectetur.
                    Faucibus arcu ultrices gravida et dictumst duis


                </Para>
                <Para className='sm:text-sm md:text-sm xl:text-xl'>
                    gravida odio semper.Integer potenti viverra et interdum lobortis amet nisi lorem.
                    Amet
                </Para>
                <Para className='sm:text-sm md:text-sm xl:text-xl'>
                    sed sit risus dictum dolor. Sem enim eget ac morbi placerat.
                </Para>
            </div>
            <TeamCards/>

        </TeamContant>
    )
}

export default TeamComponent