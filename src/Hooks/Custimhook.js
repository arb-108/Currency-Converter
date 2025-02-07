import { useEffect, useState } from 'react'


    const formatDate=(date)=> {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()-1).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

function getCurrencyData(currency){
    const [data,setdata]=useState()
    useEffect(()=>{
        const datex = new Date();
        const date=formatDate(datex); 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`)
        .then(Response=>
            {
                if(!Response.ok){
                    throw new Error('Network response was not ok');
                }
                return Response.json();
            }
            
            ).then(data=>{
                setdata(data[currency]);
                
            }
                ).catch(
                    (err)=>{
                        console.log("error hai ",err)
                    }
                )
    },[currency])
    return data;
}

export default  getCurrencyData
