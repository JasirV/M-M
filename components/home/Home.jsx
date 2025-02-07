import React from 'react';
import HeaderOne from '@/layouts/heders/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Carousel from '@/components/home/Carousel'
import About from '@/components/home/About'

const HomeOne = () => {
  return (
    <>
    <HeaderOne/>
    <Carousel/>
    <About/>
    </>
  );
};

export default HomeOne;
