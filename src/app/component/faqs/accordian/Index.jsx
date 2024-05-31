import React, { useState } from 'react';
import upArrow from "@/assest/Arrows/up.svg"
import downArrow from "@/assest/Arrows/down.svg"
import Image from 'next/image';
import { Contentsec, Div } from './Styles';
import { Content } from 'next/font/google';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'Do you accept new patients?',
            content: 'Yes, new patients are welcome!'
        },
        {
            title: 'Nisl faucibus aliquet tellus tortor sed varius pharetra? ',
            content: 'Yes, new patients are welcome!'
        },
        {
            title: 'Quisque morbi felis ut tellus id sit quam placerat natoque?',
            content: 'Yes, new patients are welcome!'
        },
        {
            title: 'Posuere est turpis curabitur platea amet in?',
            content: 'Yes, new patients are welcome!'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur?',
            content: 'Yes, new patients are welcome!'
        },
        {
            title: 'Eleifend velit placerat ultrices semper sed lacinia pellentesque ac faucibus?',
            content: 'Yes, new patients are welcome!'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur?',
            content: 'Yes, new patients are welcome!'
        },
        {
            title: 'Ullamcorper convallis tellus varius diam nec aenean augue diam nisl?',
            content: 'Yes, new patients are welcome!'
        },
      
    ];

    return (
        <div className=" mt-16 px-14 w-full">
            {accordionData.map((item, index) => (
                <Div key={index} className="border mb-4 shadow-md">
                    <button
                        className="w-full text-left py-3 px-4 focus:outline-none flex justify-between items-center"
                        onClick={() => handleToggle(index)}
                    >
                        <span className=" font-semibold text-sm">{item.title}</span>
                        <span className="ml-2 ">{activeIndex === index ? <Image src={downArrow} alt='arrow'/> : <Image src={upArrow} alt='arrow'/>}</span>
                    </button>
                    {activeIndex === index && (
                        <div className="p-4">
                            {item.content}
                        </div>
                    )}
                </Div>
            ))}
        </div>
    );
};

export default Accordion;