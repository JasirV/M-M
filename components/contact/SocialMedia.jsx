import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa6'

const SocialMedia = () => {
  return (
    <div className='flex justify-center p-5 '>
        <div className=' flex md:gap-20 p-3 flex-wrap justify-center gap-5'>
            <div className='p-4 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full'>
        <FaFacebookF size={30} />
            </div>
            <div className='p-4 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full'>
        <FaInstagram size={30}/>
            </div>
            <div className='p-4 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full'>
        <FaYoutube size={30}/>
            </div>
            <div className='p-4 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full'>
        <FaPinterest size={30}/>
            </div>
            <div className='p-4 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full'>
        <FaTwitter size={30}/>
            </div>
            <div className='p-4 hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full'>
        <FaLinkedinIn size={30}/>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia