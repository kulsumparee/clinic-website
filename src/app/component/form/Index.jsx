import React from 'react'
import * as styled from './Styles'
import LineImg from "@/assest/Group.svg"
import Image from 'next/image'

const FormContent = () => {
    return (

        <styled.FormContent className="  px-20 mt-28 pb-10">
            <div className='items-center flex flex-col '>
                <h1 className=" sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-20  mb-6 text-center">Send Us An Inquiry</h1>
                <Image src={LineImg} alt='image' className='' />
           </div>
            <form className=' mt-20'>
                <div className=' lg:flex  mb-10 justify-between   sm:block'>
                    <div className=' sm:mt-10 lg:mt-0'>
                        <label className=' font-semibold' htmlFor="Name">Name: <span className=' text-red-500'>*</span></label>
                        <input
                            type="text"
                            required
                            className="w-full h-16 sm:px-5 md:px-5 border lg:px-28 rounded-md shadow-#000000 shadow-md "
                        />
                    </div>
                    <div className='sm:mt-10 lg:mt-0'>
                        <label className=' font-semibold' htmlFor="phone">Phone: <span className=' text-red-500'>*</span></label>
                        <input
                            type="tel"
                            required
                            className=" w-full h-16 sm:px-5 md:px-5 lg:px-28  border rounded-md shadow-#000000 shadow-md "
                        />
                    </div>
                </div>
                <label className=' font-semibold' htmlFor="phone">Message: <span className=' text-red-500'>*</span></label>
                <textarea

                    type="tel"
                    required
                    className="w-full   p-4 pb-24 mb-4 border rounded-md shadow-#000000 shadow-md "
                >

                </textarea>

                <div className=' justify-center text-center'>

                    <button className=' w-[178px] h-[52px] mt-7 rounded-md text-white button'>Send Inquiry</button>
                </div>

            </form>
        </styled.FormContent>
    )
}

export default FormContent
