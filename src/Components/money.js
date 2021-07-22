import React from 'react'
import CandyShopWrapper from './candyShopWrapper';
import { useState } from 'react';


function Money() {
  
    const [allowance, setAllowance] = useState((Math.random()*10).toFixed(2));
    const updateMoney = (price) => { 
        setAllowance( allowance - price < 0 ?  Underzero : parseFloat((allowance)-price).toFixed(2));

    }

    function Underzero() {
        updateMoney(0)
        alert("Sorry, you don't have enough money :(")
    }

    return (
        <div className="buttons">
            <input className="box" id={"allowanceInput"}/>
            <button className="submit" onClick={() => setAllowance(parseFloat(document.getElementById("allowanceInput").value))}>
                Set Money
            </button>
            <button className="submit" onClick={() => setAllowance(((Math.random() *10).toFixed(2) ))}>
                Random Amount
            </button>
            <CandyShopWrapper updateMoney={updateMoney}/>
            <div className="amount">Remaining Balance: ${allowance}</div>
        </div>
        )
    }

export default Money; 