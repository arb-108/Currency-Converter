import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handlefunction=()=>{

    }
  return (
    <>
        <div className='relative flex  justify-between  p-1.5 items-center font-poppins  sm:shadow-lg px-3 h-[50px] sm:h-[50px]'>
            {open?<AiOutlineClose onClick={()=>setOpen(!open)} className='text-3xl sm:hidden'/>:<HiBars3 onClick={()=>setOpen(!open)} className='text-3xl sm:hidden'/> }
        <div className='text-[clamp(1.2rem,2vw,2rem)] cursor-pointer  sm:font-bold' >Currency Convertor</div>
        <div className={`absolute h-[calc(100vh-50px)] left-0 bottom-0 translate-y-full bg-gradient-to-t from-blue-200 to-slate-50 sm:bg-none w-screen sm:flex sm:w-auto sm:h-auto sm:static  sm:bottom-auto sm:translate-y-0  transition-all duration-600 ease-out ${open ? 'left-0' : 'left-[-640px]'}` }>
        {/* <ul className='flex flex-col sm:flex sm:flex-row gap-[2vw] p-4'>
                <li className='text-[clamp(1.5rem,3vw,2rem)] text-[#000] sm:text-[#292929] relative hover:text-[#000] cursor-pointer underline-hover sm:text-[clamp(1rem,1vw,2rem)]'>Home</li>
                <li className='text-[clamp(1.5rem,3vw,2rem)] text-[#000] sm:text-[#292929] relative hover:text-[#000] cursor-pointer underline-hover sm:text-[clamp(1rem,1vw,2rem)]'>Career</li>
                <li className='text-[clamp(1.5rem,3vw,2rem)] text-[#000] sm:text-[#292929] relative hover:text-[#000] cursor-pointer underline-hover sm:text-[clamp(1rem,1vw,2rem)]'>Services</li>
                <li className='text-[clamp(1.5rem,3vw,2rem)] text-[#000] sm:text-[#292929] relative hover:text-[#000] cursor-pointer underline-hover sm:text-[clamp(1rem,1vw,2rem)]'>Contact</li>
            </ul> */}
            </div>
            <div className='md:relative md:flex  md:text-gray-400 md:border-1 md:border-gray-400 md:py-1 md:pl-1 md:rounded md:pr-4 md:focus-within:border-black md:focus-within:text-black'> 
            <input type="text" placeholder='Search here' className='hidden md:pl-1 md:block md:placeholder-gray-500 md:pr-4 md:focus:outline-none md:focus:ring-0'/>
            <HiOutlineSearch className='md:absolute md:right-0 text-2xl cursor-pointer md:pointer-events-none md:mr-1'/>
            </div>
        </div>
    </>
  )
}

export default Navbar