
import {useEffect, useState} from 'react'

//desinging a custom hook to fetch currency data from the API and return it to the component

function usecurrencyinfo(currency){ 
    const [data, setdata ] = useState({})
    useEffect(()=>{ 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>{
            setdata(res[currency])
        })
        console.log(data)
    } ,  [currency])
    return data
}

export default usecurrencyinfo
