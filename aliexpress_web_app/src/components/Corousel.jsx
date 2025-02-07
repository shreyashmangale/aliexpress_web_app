import React from 'react';
import { Carousel } from 'antd';

const Corousel = () => (
  <Carousel autoplay speed={800}>
    <div className='w-full'>
      <img className='lg:h-[500px] md:h-[340px] h-[250px] w-full mx-auto' src="https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Simple-E-commerce-Banner-Design-scaled.jpg" alt="Corousel_Image"     />
    </div>
    <div className='w-full bg-gray-100'>
      <img className='lg:h-[500px] md:h-[340px] h-[250px] w-full mx-auto' src="https://graphicsfamily.com/wp-content/uploads/edd/2022/12/E-commerce-Product-Banner-Design-scaled.jpg" alt="Corousel_Image"     />
    </div>
    <div className='w-full bg-gray-100'>
      <img className='lg:h-[500px] md:h-[340px] h-[250px] w-full mx-auto' src="https://graphicsfamily.com/wp-content/uploads/edd/2023/09/Banner-for-bicycle-e-commerce-website-scaled.jpg" alt="Corousel_Image"     />
    </div>
    <div className='w-full bg-gray-100'>
      <img className='lg:h-[500px] md:h-[340px] h-[250px] w-full mx-auto' src="https://graphicsfamily.com/wp-content/uploads/edd/2024/01/Promo-Ecommerce-Website-Banner-Design-scaled.jpg" alt="Corousel_Image"     />
    </div>
    <div className='w-full bg-gray-100'>
      <img className='lg:h-[500px] md:h-[340px] h-[250px] w-full mx-auto' src="https://graphicsfamily.com/wp-content/uploads/edd/2024/12/Ecommerce-Shoes-Website-Banner-Ad-Design-870x489.jpg" alt="Corousel_Image"     />
    </div>
  </Carousel>
);
export default Corousel;