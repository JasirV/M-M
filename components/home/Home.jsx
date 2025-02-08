import React from 'react';
import HeaderOne from '@/layouts/heders/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Carousel from '@/components/home/Carousel'
import About from '@/components/home/About'
import Service from '@/components/home/Service'
import Additonal from '@/components/home/Additonal'
import Quality from '@/components/home/Quality'
import OurApproach from '@/components/home/OurApproach'
import WhyKerala from '@/components/home/WhyKerala'
const HomeOne = () => {
  return (
    <>
    <HeaderOne/>
    <Carousel/>
    <About/>
    <Service/>
    <Additonal/>
    <Quality/>
    <OurApproach/>
    <WhyKerala/>
    <FooterOne/>
    </>
  );
};

export default HomeOne;
