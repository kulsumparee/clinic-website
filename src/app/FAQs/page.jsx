"use client"
import React from 'react'
import LayoutComponent from '../layout/Index'
import FaqsSection from '../component/faqs/head/Index'


const FAQs = () => {
    return (
        <div>
            <LayoutComponent>
                <div className=' py-[100px] bg-slate-400'>
                    <FaqsSection />
               </div>
            </LayoutComponent>
        </div>
    )
}

export default FAQs
