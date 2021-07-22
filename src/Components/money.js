import React from 'react'
import CandyShopWrapper from './candyShopWrapper';
import { useState } from 'react';



function Money() {
  
    const [allowance, setAllowance] = useState((Math.random()*10).toFixed(2));
    const updateMoney = (price) => { 
        setAllowance( allowance - price < 0 ?  Underzero : allowance - price);

    }

function Underzero() {
    updateMoney(0)
    alert("You don't have enough money :(")
}



    return (
        <div className="App">
            <input id={"allowanceInput"}/>
            <button onClick={() => setAllowance(document.getElementById("allowanceInput").value)}>
                Set Money
            </button>
            <button onClick={() => setAllowance((Math.random() *10 ).toFixed(2))}>
                Random Amount
            </button>
            <CandyShopWrapper updateMoney={updateMoney}/>
            <div>{allowance}</div>
        </div>
        )
    }   


 
    

export default Money; 


