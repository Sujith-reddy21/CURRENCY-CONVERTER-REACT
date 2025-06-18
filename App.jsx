// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App









import React, { useState } from "react";

const currencyRates = {
  USD: 1,
  INR: 83.25,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 157.5,
};

const currencyOptions = Object.keys(currencyRates);

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const convert = () => {
    const rate = currencyRates[toCurrency] / currencyRates[fromCurrency];
    return (amount * rate).toFixed(2);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Currency Converter</h2>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>
        <span style={{ margin: "0 1rem" }}>to</span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>
      </div>
      <h3>
        {amount} {fromCurrency} = {convert()} {toCurrency}
      </h3>
    </div>
  );
}

export default App;