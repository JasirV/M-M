import React from 'react'
import HeaderOne from '@/layouts/heders/HeaderOne'
import HeaderSection from '@/components/about/HeaderSection'
import Description from '@/components/about/Description'
import Choose from '@/components/about/Choose'
import Photographer from '@/components/about/Photographer'
import Testimonials  from '@/components/about/testimonials'


const page = () => {
  return (
    <div>
        <HeaderOne/>
        <HeaderSection/>
        <Description/>
        <Choose/>
        <Photographer/>
        <Testimonials/>
    </div>
  )
}

export default page