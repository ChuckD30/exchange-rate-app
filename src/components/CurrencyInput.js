import React, { useState } from 'react';
import './CurrencyInput.css'

function CurrencyInput({rates, addToExchangeList}) {
    const [selectedCurrency, setSelectedCurrency] = useState(null)

    const selectedValue = (e) => {
        setSelectedCurrency(e.target.value)
    }

    return (
        <div className="currency-detail">
            <select name="rate" id="rates" onChange={selectedValue}>
                {
                    rates.map((rate, index) => {
                        return <option key={index} value={rate.currency}>{rate.currency}</option>
                    })
                }
            </select>
            <button onClick={() => {addToExchangeList(selectedCurrency)}}>Add to Exchange Rate List</button>
        </div>
    )
}


export default CurrencyInput