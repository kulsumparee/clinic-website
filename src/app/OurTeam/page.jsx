"use client"
import React from 'react'
import LayoutComponent from '../layout/Index'

import TeamComponent from '../component/meetTeam/head/Index'


const OurTeam = () => {
    return (
        <div>
            <LayoutComponent>
                <div className=' py-[100px] bg-slate-400'>
                    <TeamComponent />
               </div>
            </LayoutComponent>
        </div>
    )
}

export default OurTeam
