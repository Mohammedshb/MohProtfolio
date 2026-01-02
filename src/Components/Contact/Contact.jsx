import React from 'react'
import { FaLocationDot, FaSquarePhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div className='w-full py-[60px] bg-[#18052d] flex items-center justify-center'>
            <div className="container mx-auto px-4 md:px-0 ">

                {/* contact work header wrapper  */}
                <div className='flex items-center justify-center flex-col gap-6  mb-10'>
                    <motion.h3 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="text-5xl font-josefin font-semibold bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] bg-clip-text text-transparent">
                        contact
                    </motion.h3>
                </div>

                <div className='md:flex  justify-between gap-10 space-y-10 md:space-y-0'>
                    {/* text wrapper */}
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}
                          className='md:w-1/2 w-full space-y-6'
                       >
                         
                          <h3 className='text-4xl text-[#5dffff] font-josefin font-semibold capitalize'>Drop me a message</h3>
                        <p className='text-lg text-[#fafafa] font-josefin font-normal leading-7'>A web app for visuallizing personalized Spotify data view your top artists top tracks, recently
                    played tracks, detailed audio information about each track. </p>


                        {/* contacts box */}
                        <div className='flex flex-col gap-4'>
                            <div className="flex items-center gap-3">
                                <button className='bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] py-2 px-6 rounded-3xl text-lg text-white font-josefin 
                                       w-[120px] h-[50px] flex items-center justify-center font-semibold capitalize  animate-pulse hover:animate-none duration-300'>
                                    <FaSquarePhone />
                                </button>
                                <p className='text-base text-[#fafafa] font-josefin font-normal'>+91789422</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className='bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] py-2 px-6 rounded-3xl text-lg text-white font-josefin 
                                       w-[120px] h-[50px] flex items-center justify-center font-semibold capitalize  animate-pulse hover:animate-none duration-300'>
                                    <IoIosMail />
                                </button>
                                <p className='text-base text-[#fafafa] font-josefin font-normal'>gmail@example.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className='bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] py-2 px-6 rounded-3xl text-lg text-white font-josefin 
                                       w-[120px] h-[50px] flex items-center justify-center font-semibold capitalize  animate-pulse hover:animate-none duration-300'>
                                    <FaLocationDot />
                                </button>
                                <p className='text-base text-[#fafafa] font-josefin font-normal'>Demo st 84020</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* contact wrapper */}
                    <motion.form initial={{ opacity: 0, y: 300 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                     className='md:w-1/2 w-full flex flex-col gap-6 p-6 shadow-2xl shadow-[#fafafa] rounded-3xl'>
                        <div className='flex flex-col gap-2  w-full'>
                            <label htmlFor="name" className='text-base text-white font-josefin font-semibold capitalize'>
                                Name
                            </label>
                            <input className='w-full h-[48px] border  border-[#fafafa] bg-none rounded-3xl pl-3 placeholder-white text-white font-josefin font-medium' type="text" placeholder='Name' id='name' />
                        </div>


                        <div className='flex flex-col gap-2  w-full'>
                            <label htmlFor="email" className='text-base text-white font-josefin font-semibold capitalize'>
                                Email
                            </label>
                            <input className='w-full h-[48px] border  border-[#fafafa] bg-none rounded-3xl pl-3 placeholder-white text-white font-josefin font-medium' type="text" placeholder='Email' id='email' />
                        </div>


                        <div className='flex flex-col gap-2  w-full'>
                            <label htmlFor="message" className='text-base text-white font-josefin font-semibold capitalize'>
                                Massage
                            </label>
                            <textarea className='w-full min-h-[100px] h-full border  border-[#fafafa] bg-none rounded-3xl pt-3  pl-3 placeholder-white text-white font-josefin font-medium' placeholder='How can i help' id='message' />
                        </div>
                    </motion.form>


                </div>

            </div>
        </div>

    );
};

export default Contact