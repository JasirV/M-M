import React from 'react'
import HeaderOne from '@/layouts/heders/HeaderOne'
import Banner from '@/components/service/Banner'
import Handler from '@/components/service/Handler'
import Footer from '@/layouts/footers/FooterOne'
const page = () => {
  return (
    <div>
        <HeaderOne/>
        <Banner/>
        <Handler/>
        <Footer/>
    </div>
  )
}

export default page