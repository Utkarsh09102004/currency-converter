import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions=[],
  selectedCurrency,
  onCurrencyChange
}) 
 
  {
  
  return (
    <>
      <div>
        <label>{label}</label>
        <input value={amount} 
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        
        />

        <select
        
        onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
        value={selectedCurrency}>

           {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}

        </select>


      </div>
    </>
  )
}

export default InputBox