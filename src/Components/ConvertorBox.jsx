import React, { useEffect, useState } from 'react'
import Currency from './CurrencyBox'
import { HiArrowsUpDown } from "react-icons/hi2";
import CurrencyBox from './CurrencyBox';
import { FiCloudLightning } from 'react-icons/fi';
import getCurrencyData from '../Hooks/Custimhook';

const ConvertorBox = () => {
    const [amount,setamount]=useState()
    const [from,setfrom]=useState("usd")
    const [to,setto]=useState("pkr")
    const [convertedAmount,setConvertedAmount]=useState()
    const data=getCurrencyData(from)||{};
    const options=Object.keys(data);

    const swap=()=>{
        const temp=from;
        setfrom(to)
        setto(temp);
        const tempamount= amount;
        setamount(convertedAmount);
        setConvertedAmount(tempamount);
    }

    const convert=()=>{
        setConvertedAmount(amount*data[to]);
    }

  return (
    <div className='relative w-full p-2 md:p-4 bg-gray-50 text-white md:max-w-[50%] lg:max-w-[40%] rounded'>
        <h3 className='text-sm text-black'>Last updated : {new Date().toLocaleDateString()}</h3>
        <div  className='relative w-full'>
        <CurrencyBox 
            label="From" 
            amount={amount}
            Currencyoptions={options}
            onAmountchangefun={(amount)=>{
                if (amount === "0") {
                    setamount("");
                } else {
                    setamount(amount);
                }
            }}
            onCurrencychangefun={(cur)=>setfrom(cur)}
            Currencyselected={from} 
            />
        <div className='  bg-blue-600 px-2 rounded-full py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex  items-center border-4 border-gray-200'>
                <HiArrowsUpDown className='text-4xl cursor-pointer' onClick={swap} />
            {/* <button className='text-xl pl-1 '>Swipe</button> */}
        </div>
        <CurrencyBox 
                label="To" 
                Currencyoptions={options}
                onCurrencychangefun={(cur)=>setto(cur)}
                amount={convertedAmount}
                Currencyselected={to}/>
        </div>
        <div>
            <button className='p-4 bg-blue-700 w-full rounded cursor-pointer' 
            onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </div>
        <h3></h3>
    </div>
  )
}

export default ConvertorBox