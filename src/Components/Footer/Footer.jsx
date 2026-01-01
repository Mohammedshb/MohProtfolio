import React from 'react'
import { CiTwitter } from 'react-icons/ci';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

function Footer() {

  let date = new Date();
  date = date.getFullYear();

  return (
    <div className='w-full pt-10  bg-[#18052d] flex items-center justify-center'>
      <div className="container mx-auto px-4 md:px-0">
         <div className="flex items-center justify-between gap-10 w-full border-t border-[#fafafa] py-10">
               <p className='text-base text-white font-josefin font-normal '>{date} &copy; All Rights Reserved</p>

                {/* social links */}
         <div className='flex items-center  gap-4'>
                <a href="" className='text-white  text-2xl'><FaGithub/></a>
                <a href="" className='text-white  text-2xl'><CiTwitter/></a>
                <a href="" className='text-white  text-2xl'><FaLinkedin/></a>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Footer