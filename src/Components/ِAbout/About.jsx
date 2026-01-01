import React from 'react'

function About() {
    return (
        <div className='w-full md:min-h-[1043px] py-[60px] h-full flex items-center justify-center bg-[#18052d] '>
            <div className='container mx-auto px-4 md:px-0'>
                <div className="flex items-center flex-col justify-center">
                    {/* about header wrapper */}
                    <div className="flex items-center justify-center flex-col gap-6 mb-10">
                        <h3 className='text-5xl font-josefin capitalize 
                         font-semibold bg-gradient-to-r from-[#5dffff] to-[#ae0ca7]
                             bg-clip-text text-transparent'> About</h3>
                            <p className='text-xl text-[#fafafa] font-josefin font-normal leading-7
                            max-w-[800px] w-full'>i'm a Entry level front-end developer looking
                            for intership opportunities in your company i focus on writing accessible HTML, using modren Tailwaind-CSS practices and
                            writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adopt to Whatever tools are required.
                            </p>
                    </div>

                    {/* ABOUT SKILLS WRAPPER */}
                    <div className='max-w-[895px] w-full md:min-h-[657px] h-full  '>
                        <img className='w-full h-full object-cover' src="/skills.png" alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About