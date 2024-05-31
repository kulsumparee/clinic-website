import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imag1 from  "@/assest/logos/logoo1.svg"
import imag2 from  "@/assest/logos/logoo2.svg"
import imag3 from  "@/assest/logos/logoo3.svg"
import imag4 from  "@/assest/logos/logoo4.svg"
import imag5 from  "@/assest/logos/logoo5.svg"
import imag6 from  "@/assest/logos/logoo6.svg"
import imag7 from  "@/assest/logos/logoo7.svg"
import imag8 from  "@/assest/logos/logoo8.svg"
import imag9 from  "@/assest/logos/logoo9.svg"


const slides = [
    {
        id: 1,
        img: imag1,
        alt: 'Slide 1'
    },
    {
        id: 2,
        img: imag2,
        alt: 'Slide 2'
    },
    {
        id: 3,
        img: imag3,
        alt: 'Slide 3'
    },
    {
        id: 4,
        img: imag4,
        alt: 'Slide 4'
    },
    {
        id: 5,
        img: imag5,
        alt: 'Slide 5'
    },
    {
        id: 6,
        img: imag6,
        alt: 'Slide 6'
    },
    {
        id: 7,
        img: imag7,
        alt: 'Slide 7'
    },
    {
        id: 8,
        img: imag8,
        alt: 'Slide 8'
    },
    {
        id: 9,
        img: imag9,
        alt: 'Slide 9'
    },
  
];

function SlickCarousel() {
    return (
        <div className=' mt-20 mb-24'>
            <Marquee speed={150}>
                {slides.map((data) =>
                    <div className=' w-62' key={data.id}>
                        <Image src={data.img} alt='image' className=' p-12' />

                    </div>
                )}
            </Marquee>
        </div>
    );
};

export default SlickCarousel;

