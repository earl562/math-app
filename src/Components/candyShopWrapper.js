import React from 'react'
import CandyItemObject from './candyItemObject'
import CandyItem from './candyItem'
import ChocolateBar from '../images/chocolate-bar.png'
import CottonCandy from '../images/cotton-candy.png'
import Taffy from '../images/taffy.png'
import GummyBear from '../images/gummy-bear.png'
import Candy from '../images/hard-candy.png'
import Lollipops from '../images/lollipops.png'




export default function CandyShopWrapper(props) {
    let chocolateBar = new CandyItemObject('Chocolate Bar', 2.25, ChocolateBar)
    let cottonCandy = new CandyItemObject('Cotton Candy', 3.05, CottonCandy)
    let gummyBear = new CandyItemObject('Gummy Bear', 5.00, GummyBear)
    let lollipops = new CandyItemObject('Lollipops', 1.50, Lollipops)
    let candy = new CandyItemObject('Hard Candy', 0.12, Candy)
    let taffy = new CandyItemObject('Taffy', 0.55, Taffy)
    
    let candies = [chocolateBar,cottonCandy,gummyBear,lollipops,candy,taffy]
    
    
    
    return (
        <div className="candyBox">
            {
                candies.map((candy,index)=>{
                    return (
                        <CandyItem
                            key={index}
                            object={candy}
                            updateMoney={props.updateMoney}
                        />
                    )
                })
            }
        </div>
    )
}
