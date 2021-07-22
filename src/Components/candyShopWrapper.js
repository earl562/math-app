import React from 'react'
import CandyItemObject from './candyItemObject'
import CandyItem from './candyItem'
import ChocolateBar from '../images/chocolate-bar.png'
import CottonCandy from '../images/cotton-candy.png'
import Taffy from '../images/taffy.png'
import GummyBear from '../images/gummy-bear.png'
import Candy from '../images/candy.png'
import Lollipops from '../images/lollipops.png'




export default function CandyShopWrapper(props) {
    let chocolateBar = new CandyItemObject('Chocolate Bar', 1.5, ChocolateBar)
    let cottonCandy = new CandyItemObject('Cotton Candy', 1.5, CottonCandy)
    let gummyBear = new CandyItemObject('Gummy Bear', 1.5, GummyBear)
    let lollipops = new CandyItemObject('Lollipops', 1.5, Lollipops)
    let candy = new CandyItemObject('Candy', 1.5, Candy)
    let taffy = new CandyItemObject('Taffy', 1.5, Taffy)
    
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
