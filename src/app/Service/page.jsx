"use client"
import React from 'react'
import LayoutComponent from '../layout/Index'
import ServiceSection from '../component/ourServices/Index'


const Service = () => {
  return (
    <div>
      <LayoutComponent>
        <div className=' py-[100px] bg-slate-500'>
          <ServiceSection />
        </div>
      </LayoutComponent>  
    </div>
  )
}

export default Service
