import React from 'react'
import logo from './logo.svg';
import './App.css';
import CandyShopWrapper from './Components/candyShopWrapper';
import { useState } from 'react';

function App() {
  
  const [allowance, setAllowance] = useState((Math.random()*10).toFixed(2));
  const updateMoney = (price) => { 
    setAllowance(allowance - price);
  }

  return (
    <div className="App">
      {/*Header Component */}
      <p>{allowance}</p>
	  <input id={"allowanceInput"}/>
	  <button onClick={() => setAllowance(document.getElementById("allowanceInput").value)}>
		  Set Money
	    </button>
	  <button onClick={() => setAllowance((Math.random() *10 ).toFixed(2))}>
          Random Amount
        </button>
      <CandyShopWrapper 
        updateMoney={updateMoney}
      />
	  {/*Money view Component*/}
	  {/*Footer Component*/}      

    </div>
  );
}

export default App;