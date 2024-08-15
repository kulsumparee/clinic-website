import React from 'react'
import Image from 'next/image'
import logo from "@/assest/NavLogo.svg"
import icon1 from "@/assest/ReactIcons/Group 38262.svg"
import icon2 from "@/assest/ReactIcons/Group 38264.svg"
import icon3 from "@/assest/ReactIcons/Group 38265.svg"
import icon4 from "@/assest/ReactIcons/Group 38266.svg"
import { Footer } from './Styles'



const FooterSection = () => {
  
  return (
      <Footer className=' sm:block md:block lg:flex justify-between  '>
          
              <div className=' sm:w-full md:w-15% lg:w-[25%] '>
                  <div className=' flex gap-4 items-center mb-5'>
                      <Image src={logo} alt='logo' />
                      <h1 className=' font-bold text-lg'>Logo</h1>
                  </div>
                  <div>
                  <p className=' '>Lorem ipsum dolor sit amet consectetur.
                      Faucibus arcu ultrices gravida et dictumst duis gravida odio semper.
                      Integer potenti viverra et interdum lobortis amet nisi lorem.
                      Amet sed sit risus dictum dolor. Sem enim eget ac morbi placerat.</p>
                  </div>
              </div>

              <div className=' sm:mt-20 md:mt-20 lg:mt-0'>
                  <h1 className=' font-bold text-lg'>Features</h1>

                  <ul className=' mt-5'>
                      <li className=' pb-4'>Services</li>
                      <li className=' pb-4'>Our Team</li>
                      <li className=' pb-4'>Contact Us</li>
                      <li className=' pb-4'>FAQs</li>

                  </ul>

              </div>

          <div className='sm:mt-40 md:mt-20 lg:mt-0'>
                  <h1 className=' font-bold text-lg'>Follow Us</h1>
                  <div className=' flex mt-10 gap-3'>
                      <Image src={icon1} alt='image' />
                      <Image src={icon2} alt='image' />
                      <Image src={icon3} alt='image' />
                      <Image src={icon4} alt='image' />
                 </div>


              </div>
        
      </Footer>
  )
}

export default FooterSection
