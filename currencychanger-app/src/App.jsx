import { useState  } from 'react'
import InputBox from './components/InputBox.jsx'
import usecurrencyinfo from './customhooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amout, setamount] = useState(0)
  const [form, setform] = useState("usd")
  const [to , setto] = useState("inr")
  const [convertedamount, setconvertedamount] = useState(0)


  const currencyinfo = usecurrencyinfo(form)


   const options  = Object.keys(currencyinfo)
 const swapcurrency = () => {
  setform(to)
  setto(form)
  setconvertedamount(amout)
  setamount(convertedamount)
 }

       const convert =() =>  { setconvertedamount(amout * currencyinfo[to])}

  
return (
  <div className="w-full min-h-screen flex flex-wrap justify-center items-center bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-800">

    <div className="w-full max-w-lg mx-auto border border-white/30 rounded-xl p-5 backdrop-blur-sm bg-white/20 shadow-xl">

      <form
        onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}
      >

        {/* From Currency */}
        <div className="w-full mb-2">
          <InputBox
            label="From"
            amount={amout}
            onAmountChange={(amount) => setamount(amount)}
            currencyOptions={options}
            selectCurrency={form}
            onCurrencyChange={(currency) => setform(currency)}
          />
        </div>

        {/* Swap Button */}
        <div className="relative w-full h-0">
          <button
            type="button"
            onClick={swapcurrency}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-md"
          >
            Swap
          </button>
        </div>

        {/* To Currency */}
        <div className="w-full mt-2 mb-4">
          <InputBox
            label="To"
            amount={convertedamount}
            onAmountChange={(amount) => setconvertedamount(amount)}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(currency) => setto(currency)}
          />
        </div>

        {/* Convert Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Convert {form.toUpperCase()} to {to.toUpperCase()}
        </button>

      </form>

    </div>

  </div>
)

}

export default App
