import React, {useState, useEffect} from "react";
import axios from "axios"
import './CurrencyExchangeList.css';

function CurrencyExchangeList({addedRates}) {

    const [realTimeRates, setRealTimeRates] = useState([])

    useEffect(()=>{
        const realTime = () => {
            const rates = [];
            axios.get("http://data.fixer.io/api/latest?access_key=d5a3387df457621cfb4965d44d001c57")
                 .then((res) => {
                  for (const [key, value] of Object.entries(res.data.rates)) {
                      rates.push({currency:key, currentRate:value})
                  }
                  setRealTimeRates([...realTimeRates, ...rates])
                 })
                 .catch(err => console.log(err))
         }
         setInterval(realTime(), 600000)
        },[])

    return (
        <div className="exchange-detail">
            <h3>Base Rate - EUR</h3>
            <ul>
                {realTimeRates.filter(rate => addedRates.includes(rate.currency)).map((realTimeRate, index) => (
                    <li key={index}>💸 {realTimeRate.currency} - {realTimeRate.currentRate}</li>   
                )
                )}
            </ul>
        </div>
    )
}

export default CurrencyExchangeList