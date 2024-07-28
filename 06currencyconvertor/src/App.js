import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

	const currencyInfo = useCurrencyInfo(from)
	const options = Object.keys(currencyInfo)
	// console.log(options)

	const convert = ()=>{
		// console.log(amount)
		// console.log(currencyInfo[to])
		setConvertedAmount(Math.round(amount*currencyInfo[to]))
		console.log(convertedAmount)
	} 

	const swap = () => {
		setFrom(to)
		setTo(from)
		setAmount(convertedAmount)
		convert()
	  }

  return (
    <>
    <div className='w-full h-screen bg-cover' 
    style={{backgroundImage:`url(https://images.pexels.com/photos/259100/pexels-photo-259100.jpeg)`}}
    >
       <div className='w-full'>
			<div className=' w-full max-w-md mx-auto border border-gray-60 rounded-lg p-10 backdrop-blur-sm bg-white/30'>
			<h2 className='text-center bg-blend-color-burn text-2xl' > <strong>Currency Converter</strong></h2>
			<form className='my-11' onSubmit={(e) => {
				e.preventDefault()
				convert()
			}}>
			<div className=' w-full mb-1'>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
              />
			</div>
			<div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>
            </div>
			<div className='w-full mb-1'>
              <InputBox
              label="to"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
			  onAmountChange={(amount) => setConvertedAmount(amount)}
              selectedCurrency={to}
              amountDisabled={true}
              />
            </div>
			<button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
			</form>
			</div>
       </div>
    </div>
    </>
  );
}

export default App;
