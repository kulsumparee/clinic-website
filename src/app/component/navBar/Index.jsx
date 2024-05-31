
import React, { useState } from 'react'
import * as style from './Styled'
import Image from 'next/image'
import Logo from "@/assest/NavLogo.svg"

import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };




  return (

     

      
    <style.NavContent className= "  absolute  z-10 left-0  text-white flex items-center justify-between  lg:flex md:flex lg:flex-1 ">
      <div className={`lg:hidden block absolute justify-center  border-2 text-center left-[60%] z-10 top-[92%] w-[40%] h-90   bg-slate-700 transition ${menuOpen ? 'block' : 'hidden'} `}>
        <ul className=''>
          <li className='my-4 py-4  border-b border-slate-600 hover:bg-slate-200 hover:text-black hover:rounded cursor-pointer'>Home</li>
          <li className='my-4 py-4 border-b border-slate-600 hover:bg-slate-200 hover:text-black  hover:rounded cursor-pointer'>Services</li>
          <li className='my-4 py-4 border-b border-slate-600 hover:bg-slate-200 hover:text-black  hover:rounded cursor-pointer'>Our Team</li>
          <li className='my-4 py-4 border-b border-slate-600 hover:bg-slate-200 hover:text-black  hover:rounded cursor-pointer'>Contact Us</li>
          <li className='my-4 py-4 border-b border-slate-600 hover:bg-slate-200 hover:text-black  hover:rounded cursor-pointer'>FAQs</li>


        </ul>
      </div>



      <style.ListItems className="flex items-center  ">
        <Image src={Logo} alt='logo' width={68} height={68} layout='fixed' />
        <style.Heading className="ml-4">Logo</style.Heading>
      </style.ListItems>
      <ul className=" gap-14 cursor-pointer hidden lg:flex   ">
        <Link href="/"><li>Home</li></Link>
        
        <Link href="/Service"><li>Services</li></Link>
        <Link href="/OurTeam"><li>Our Team</li></Link>
        <Link href="/ContactUs"><li>Contact Us</li></Link>
        <Link href="/FAQs"><li>FAQs</li></Link>

      </ul>

      <div className="block lg:hidden transition">
        <FaBars onClick={toggleMenu} className="cursor-pointer" />
      </div>
      </style.NavContent>
   

  );
}

export default NavBar
