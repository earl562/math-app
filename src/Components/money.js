import React from 'react'
import CandyShopWrapper from './candyShopWrapper';
import { useState } from 'react';


function Money() {
  
    const [allowance, setAllowance] = useState((Math.random()*10));
    const updateMoney = (price) => { 
        setAllowance( allowance - price < 0 ?  Underzero : allowance - price);

    }

    function Underzero() {
        updateMoney(0)
        alert("Sorry, you don't have enough money :(")
    }

    return (
        <div>
            <input className="box" id={"allowanceInput"}/>
            <button className="submit" onClick={() => setAllowance(parseInt(document.getElementById("allowanceInput").value))}>
                Set Money
            </button>
            <button className="submit" onClick={() => setAllowance((Math.random() *10 ))}>
                Random Amount
            </button>
            <CandyShopWrapper updateMoney={updateMoney}/>
            <div className="amount">Remaining Balance: ${allowance.toFixed(2)}</div>
        </div>
        )
    }

export default Money; 