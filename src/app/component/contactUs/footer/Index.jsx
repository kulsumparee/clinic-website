
import React from 'react';
import * as Style from './Styled';
import Image from 'next/image';
import icon1 from "@/assest/icon/Icon 1.svg"
import icon2 from "@/assest/icon/Icon 2.svg"
import icon3 from "@/assest/icon/Icon 3.svg"
import icon4 from "@/assest/icon/Icon 4.svg"



const ContactFooter = () => {
    return (
        <Style.FooterContainer>
            <Style.FooterContent className=''>
              
                <Style.FirstSection >
                    <Style.Title>Clinic Lorem Ipsum</Style.Title>
                    <div className=' mt-5'>
                        <div className='flex  gap-5  mb-5'>
                            <div className=' '>
                                <Image src={icon1} alt='icon' />
                            </div>
                            <div>
                                <p>Location:</p>
                                <p className=' w-64'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>
                        </div>
                        <div className='flex gap-5  mb-5'>
                            <div>
                                <Image src={icon2} alt='icon' />
                            </div>
                            <div>
                                <p>Phone:</p>
                                <p>(432) 123446098</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <div>
                                <Image src={icon3} alt='icom' />
                            </div>
                            <div>
                                <p>Whatsapp:</p>
                                <p>+923 123446098</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <Image src={icon4} alt='icon' />
                            <div>
                                <p>Email:</p>
                                <p>clinicemail44@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Style.FirstSection>
              


            </Style.FooterContent>

        </Style.FooterContainer>


    );
};
export default ContactFooter