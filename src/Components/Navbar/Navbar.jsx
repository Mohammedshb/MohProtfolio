import React, { useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'
import { RiCloseLargeLine } from 'react-icons/ri'

function Navbar() {


  const [isOpen, setIsOpen] = useState(false);






  return (
    <div className='w-full h-16 bg-none  flex items-center justify-center top-0 left-0 absolute  z-50'>


      <div className='container mx-auto px-4 md:px-0'>
        {/* Desktop Navbar  */}
        <nav className='w-full flex items-center justify-center gap-10'>
          <div className='text md:hidden flex items-center justify-center cursor-pointer'>
            <h1 className='text-xl  text-white font-josefin font-semibold capitalize'>Developer</h1>
          </div>
          <ul className='hidden md:flex items-center justify-center gap-10'>
            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>Home</a></li>
            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>About</a></li>
            <li><div className='trapezoid'></div></li>
            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>Work</a></li>
            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>Contact</a></li>
          </ul>

          <div className='md:hidden flex items-center justify-center '>
            <button onClick={() => setIsOpen(!isOpen)} className='text-3xl font-semibold text-white bg-none bg-noe cursor-pointer'><MdMenuOpen /></button>
          </div>
        </nav>

        {/* mobile navbar */}
        <nav className={`  md:hidden max-w-[350px] h-screen bg-[#18052d] 
          fixed top-0 right-0  w-full flex items-center flex-col   justify-center gap-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} translate-all duration-300 ease-in-out z-50`}>


          <div className='md:hidden flex items-center justify-center '>
            <button onClick={() => setIsOpen(!isOpen)} className='text-3xl font-semibold text-white bg-none bg-noe cursor-pointer'><RiCloseLargeLine /></button>
          </div>



          <ul className='flex flex-col  items-center justify-center gap-10'>

            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>Home</a></li>
            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>About</a></li>
           
           
            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>Work</a></li>
            <li><a href="/" className='text-lg text-white font-inter font-medium uppercase cursor-pointer'>Contact</a></li>
          </ul>

        </nav>
      </div>
    </div>
  )
}

export default Navbar;