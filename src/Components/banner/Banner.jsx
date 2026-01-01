import React from 'react'

function Banner() {
    return (
        <div className='w-full min-h-[880px] h-full bg-[url("/bg.png")] bg-cover bg-center bg-no-repeat
         flex items-center justify-center relative'>
            <div className="container mx-auto px-4 md:px-0 ">
                <div className="flex items-center justify-between gap-10 ">
                    {/* text wrapper */}
                    <div className='max-w-[612px] w-full space-y-6 relative z-20'>
                        <h1 className='text-7xl text-white font-josefin font-bold capitalize '>Hi, i'm Mohammed </h1>
                        <h3 className='text-5xl font-josefin capitalize font-semibold bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] bg-clip-text text-transparent '>Front-end Developer</h3>
                        <p className='text-lg text-[#fafafa] font-josefin font-normal leading-8 '>A self-taught font-end developer  i build responsive and
                            user-friendly websites I focus on clean code and efficient
                            design, ensure seamless interactions that align with
                            both user expectations  and business objectives   .</p>

                        <button className='bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] py-2 px-6 rounded-3xl text-lg text-white font-josefin font-semibold capitalize  animate-pulse hover:animate-none duration-300 '> Contact</button>
                    </div>

                    {/* image wrapper */}
                    {/* <div className='max-w-[550px] w-full min-h-[600px] h-full '>
                       
                       </div> */}
                    <div className='absolute md:right-10 bottom-0'>
                        <img className='md:max-w-[750px] w-full min-h-[600px]   h-full object-cover' src='/meccd.png' alt='my photo' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner