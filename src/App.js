import React from 'react'
import logo from './logo.svg';
import './App.css';
import CandyShopWrapper from './Components/candyShopWrapper';
import Money from './Components/money.js'
import { useState } from 'react';


function App() {
  
    //const [allowance, setAllowance] = useState((Math.random()*10).toFixed(2));
    //const updateMoney = (price) => { 
        //setAllowance(allowance - price);
    

    return (
        <div className="App">
            {/*Header Component */}
            {/*Footer Component*/}      
        <Money />
        </div>
    );
}

export default App;