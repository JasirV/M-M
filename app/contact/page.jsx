import React from 'react'
import Banner from '@/components/contact/Banner'
import HeaderOne from '@/layouts/heders/HeaderOne'
import HederSection from '@/components/contact/HederSection'
import Information from '@/components/contact/Information'
import Form from '@/components/contact/Form'
import SocialMedia from '@/components/contact/SocialMedia'
import Footer from '@/layouts/footers/FooterOne'
const page = () => {
  return (
    <div>
        <HeaderOne/>
        <Banner/>
        <HederSection/>
        <Information/>
        <Form/>
        <SocialMedia/>
        <Footer/>
    </div>
  )
}

export default page