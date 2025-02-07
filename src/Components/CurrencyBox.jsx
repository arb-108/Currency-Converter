import React from 'react'

const CurrencyBox = ({
  label,
  amount,
  Currencyoptions=[],
  onAmountchangefun,
  onCurrencychangefun,
  Currencyselected="usd",
  amountdisable= false,
  Currencydisable= false,
  className=""
}) => {
  return (
    <div className='flex justify-between px-2 w-full my-2 bg-[#e5e5e5]  h-[120px] rounded text-black'>
        <div className='flex flex-col justify-around'>
            <h2 className='text-lg'>{label}</h2>
            <input type="number" 
            className='border-b-0 h-auto border-black p-0 focus:outline-none  text-2xl   max-w-[200px] leading-3.5 placeholder:text-gray-500' 
             placeholder='0'
             disabled={amountdisable}
             value={amount}
             onChange={(e)=>onAmountchangefun 
             && onAmountchangefun(e.target.value)}/>
        </div>
        <div className='flex flex-col justify-around'>
            <h2 className='text-lg'>Currency Type</h2>
            <select name="" id=""
             className='bg-gray-300 p-2 rounded'
             value={Currencyselected}
             disabled={Currencydisable}
             onChange={(e)=>onCurrencychangefun 
              && onCurrencychangefun(e.target.value)}>
              {
                Currencyoptions.map((key,index)=>{
                 return <option key={index} value={key}>{key}</option>
                })
              }
               
                {/* <option value="2">inr</option>
                <option value="3">pkr</option> */}
            </select>
        </div>
    </div>
  )
}

export default CurrencyBox