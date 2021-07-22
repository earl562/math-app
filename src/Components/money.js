import React from 'react'
import CandyShopWrapper from './candyShopWrapper';
import { useState } from 'react';



function Money() {
  
    const [allowance, setAllowance] = useState((Math.random()*10));
    const updateMoney = (price) => { 
        setAllowance(allowance - price);
    }

    return (
        <div className="App">
            <input id={"allowanceInput"}/>
            <button onClick={() => setAllowance(parseInt(document.getElementById("allowanceInput").value))}>
                Set Money
            </button>
            <button onClick={() => setAllowance((Math.random() *10 ))}>
                Random Amount
            </button>
            <CandyShopWrapper updateMoney={updateMoney}/>
            <div>{allowance.toFixed(2)}</div>
        </div>
        )
    }   

export default Money; 
