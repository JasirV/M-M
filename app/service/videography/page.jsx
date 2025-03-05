import React from 'react'
import HeaderOne from '@/layouts/heders/HeaderOne'
import HeaderSection from '@/components/service/videography/HeaderSection'    
import VideoGrid from '@/components/service/videography/VideoGrid'    
import FooterOne from '@/layouts/footers/FooterOne'
const page = () => {
  return (

    <div>
        <HeaderOne/>
        <HeaderSection/>
        <VideoGrid/>
        <FooterOne/>
    </div>
  )
}

export default page