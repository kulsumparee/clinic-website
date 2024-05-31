import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "@/assest/Clinic/Rectangle 4361.svg"
import image2 from "@/assest/Clinic/Rectangle 4362.svg"
import image3 from "@/assest/Clinic/Rectangle 4363.svg"
import image4 from "@/assest/Clinic/Rectangle 4364.svg"
import image5 from "@/assest/Clinic/Rectangle 4365.svg"
import image6 from "@/assest/Clinic/Rectangle 4366.svg"
import image7 from "@/assest/Clinic/Rectangle 4367.svg"
import image8 from "@/assest/Clinic/Rectangle 4368.svg"
import image9 from "@/assest/Clinic/Rectangle 4369.svg"
import image10 from "@/assest/Clinic/Rectangle 4310.svg"
import image11 from "@/assest/Clinic/Rectangle 4311.svg"
import image12 from "@/assest/Clinic/Rectangle 4360.svg"

    const slides = [
        {
            id: 1,
            img: image1,
            alt: 'Slide 1'
        },
        {
            id: 2,
            img: image2,
            alt: 'Slide 2'
        },
        {
            id: 3,
            img: image3,
            alt: 'Slide 3'
        },
        {
            id: 4,
            img: image4,
            alt: 'Slide 4'
        },
        {
            id: 5,
            img: image5,
            alt: 'Slide 5'
        },
        {
            id: 6,
            img: image6,
            alt: 'Slide 6'
        },
        {
            id: 7,
            img: image7,
            alt: 'Slide 7'
        },
        {
            id: 8,
            img: image8,
            alt: 'Slide 8'
        },
        {
            id: 9,
            img: image9,
            alt: 'Slide 9'
        },
        {
            id: 10,
            img: image10,
            alt: 'Slide 7'
        },
        {
            id: 11,
            img: image11,
            alt: 'Slide 8'
        },
        {
            id: 12,
            img: image12,
            alt: 'Slide 9'
        },
    ];

function SlickCarousel() {
    return (
        <div className=''>
            <Marquee>
                {slides.map((data) => 
                    <div key={data.id}>

                    <div className=' w-full  p-2' >
                        <Image src={data.img } alt='image' className='w-full'/>
                        
                 </div>
                    </div>
            )}
            </Marquee>
        </div>
    );
};

export default SlickCarousel;

