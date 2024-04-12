import { useState,useEffect } from 'react'

import useCurrencyInfo from './assets/hooks/useCurrencyInfo'
import { InputBox } from './assets/components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom]=useState("usd")
  const [to , setTo]= useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)

  function Convert(){

    setConvertedAmount(amount*currencyInfo[to])
  }
  useEffect(() => {
    // setConvertedAmount(amount*currencyInfo[to])
    Convert()
  }, [from, to, amount]);

  

  return (
    <>
    <form onSubmit={(e) => {
            e.preventDefault()
            Convert()
          }}>
    <InputBox
     label="from"
     amount={amount}
     onAmountChange={(amount) => setAmount(amount)}
    
     onCurrencyChange={(currency) => setFrom(currency)}
     selectedCurrency={from}
     currencyOptions={options}
    />

<InputBox
     label="to"
     amount={convertedAmount}
     
     onCurrencyChange={(currency) => setTo(currency)}
     selectedCurrency={to}
     currencyOptions={options}
    />
    {/* <button
            type='submit'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button> */}
</form>

    </>
  )
}

export default App
