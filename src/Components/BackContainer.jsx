import React from 'react'
import ConvertorBox from './ConvertorBox'

const BackContainer = () => {
  return (
    // <div className='font-poppins w-screen h-[calc(100vh-50px)] bg-cover bg-center bg-[url(/Images/stock.jpg)] flex items-start justify-center px-2 pt-10 lg:pt-20'>
    <div className='font-poppins w-screen h-[calc(100vh-50px)] bg-gradient-to-r from-slate-900 to-slate-700 flex items-start justify-center px-2 pt-10 lg:pt-20'>
        <ConvertorBox/>
    </div>
  )
}

export default BackContainer