import React from 'react'
import Image from 'next/image'
import CardDetails from '../cardDetails/Index'
import { Card, Carddiv } from './Styles'
import ButtonComponent from '../../button/Index'

const CardSection = () => {


        

    return (
        
        <Card className=' my-10 sm:m-20 md:m-11 lg:m-10  '>
                {CardDetails && CardDetails.map(data => (
                    <Carddiv key={data.id} className=' p-5 flex flex-col items-center bg-[#FDEBD0] w-full h-full pb-10 ' >
                        <div className='  w-[60px] h-[60px]  mt-16 mb-5'>
                            <Image src={data.img} alt='image' />
                        </div>
                        <h1 className=' text-[20px] font-semibold mb-4'>{data.title}</h1>
                        <p className=' '>{data.para} </p>
                        <p className=' '>{data.para1} </p>       
                        <p className=' '>{data.para2} </p>
                        <p>{data.text} </p>
                       
                        <ButtonComponent color="outline" btn={data.button} />
                       
                    </Carddiv>


                ))}
                
            </Card>
        
    )
}

export default CardSection
