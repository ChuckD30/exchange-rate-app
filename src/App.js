import React, { useEffect, useState } from "react"
import axios from "axios"
import CurrencyExchangeList from './components/CurrencyExchangeList'
import CurrencyInput from './components/CurrencyInput'
import './App.css';


function App() {

  const [rateArray, setRateArray] = useState([]);

  const [addRate, setAddRate] = useState([])

  const addToExchangeList = (selectedRate) => {
      setAddRate([...addRate.filter(rate => rate !== selectedRate), selectedRate])
  }

  useEffect(()=>{
    const rates = [];
    axios.get("http://data.fixer.io/api/latest?access_key=d5a3387df457621cfb4965d44d001c57")
         .then((res) => {
          for (const [key, value] of Object.entries(res.data.rates)) {
              rates.push({currency:key, currentRate:value})
          }
          setRateArray([...rateArray, ...rates])
         })
         .catch(err => console.log(err))
    },[])

  return (
    <div className="App">
      <div className="currency-detail">
        <CurrencyInput rates={rateArray} addToExchangeList={addToExchangeList} />
      </div>
        <CurrencyExchangeList addedRates={addRate} />
    </div>
  );
}

export default App;