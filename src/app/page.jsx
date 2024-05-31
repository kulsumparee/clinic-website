"use client"
import React from 'react'
import HeroSection from './component/heroSec/Index'
import ServiceSection from './component/ourServices/Index'
import ClinicSection from './component/ourClinic/main/Index'
import TeamComponent from './component/meetTeam/head/Index'
import ContactSection from './component/contactUs/map/Index'
import FaqsSection from './component/faqs/head/Index'
import FormContent from './component/form/Index'
import PartnersSection from './component/trustedPartners/Index'
import LayoutComponent from './layout/Index'

const page = () => {
  return (
    <div>
      <LayoutComponent>
        <HeroSection />
        <ServiceSection />
        <ClinicSection />
        <TeamComponent />
        <ContactSection />
        <FaqsSection />
        <FormContent />
        <PartnersSection />

      </LayoutComponent>

    </div>
  )
}

export default page
