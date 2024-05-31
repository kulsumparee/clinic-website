import React from 'react';
import { Card, TeamContainer } from './Styles';
import CardContant from '../cardData/Index';
import Image from 'next/image';

const TeamCards = () => {
  return (
    <TeamContainer className='p-14 md:grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
      {CardContant && CardContant.map(data => (
        <Card key={data.id} className='text-center sm:mt-10 md:mt-0 md:px-20 md:py-6 lg:p-5 xl:p-5'>
          <div className=''>
            <Image src={data.src} alt='card' className=' mx-auto' />
          </div>
          <h1 className='text-[20px] font-semibold mt-3'>{data.title1}</h1>
          <h2 className='font-semibold mb-3'>{data.title2}</h2>
          <p>{data.line1}</p>
          <p>{data.line2}</p>
          <p>{data.line3}</p>
        </Card>
      ))}
    </TeamContainer>
  );
};

export default TeamCards;





