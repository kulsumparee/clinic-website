import React from 'react'
import * as styled from './Styles'
import LineImg from "@/assest/Group.svg"
import Image from 'next/image'

const FormContent = () => {
    return (

        <styled.FormContent className="  px-20 mt-28 pb-10">
            <div className='items-center flex flex-col '>
                <h1 className=" text-5xl font-bold mt-20  mb-6 text-center">Send Us An Inquiry</h1>
                <Image src={LineImg} alt='image' />
           </div>
            <form className=' mt-20'>
                <div className=' lg:flex justify-between  sm:block'>
                    <div>
                        <label htmlFor="Name">Name: <span className=' text-red-500'>*</span></label>
                        <input
                            type="text"
                            required
                            className="w-full p-4 px-32 mb-4 border rounded-md shadow-#000000 shadow-md "
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone: <span className=' text-red-500'>*</span></label>
                        <input
                            type="tel"
                            required
                            className="w-full px-32  p-4 mb-4 border rounded-md shadow-#000000 shadow-md "
                        />
                    </div>
                </div>
                <label htmlFor="phone">Message: <span className=' text-red-500'>*</span></label>
                <textarea

                    type="tel"
                    required
                    className="w-full p-4 pb-24 mb-4 border rounded-md shadow-#000000 shadow-md "
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
