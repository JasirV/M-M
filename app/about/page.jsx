import React from 'react'
import HeaderOne from '@/layouts/heders/HeaderOne'
import HeaderSection from '@/components/about/HeaderSection'
import Description from '@/components/about/Description'
import Choose from '@/components/about/Choose'


const page = () => {
  return (
    <div>
        <HeaderOne/>
        <HeaderSection/>
        <Description/>
        <Choose/>
    </div>
  )
}

export default page