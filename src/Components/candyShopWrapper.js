import React from 'react'
import CandyItemObject from './candyItemObject'
import CandyItem from './candyItem'
import ChocolateBar from '../images/chocolate-bar2.png'
import CottonCandy from '../images/cotton-candy.png'
import Taffy from '../images/taffy.png'
import GummyBear from '../images/gummy-bear.png'
import Candy from '../images/hard-candy.png'
import Lollipops from '../images/lollipops.png'
import Food from './foodFactsAPI'



export default function CandyShopWrapper(props) {
    let chocolateBar = new CandyItemObject('Chocolate Bar', 2.25, ChocolateBar, "03424005")
    let cottonCandy = new CandyItemObject('Cotton Candy', 3.05, CottonCandy, "0014200003259")
    let gummyBear = new CandyItemObject('Gummy Bear', 5.00, GummyBear, "4001686301265")
    let lollipops = new CandyItemObject('Lollipops', 1.50, Lollipops, "4004363300025")
    let candy = new CandyItemObject('Hard Candy', 0.12, Candy, "40144016")
    let taffy = new CandyItemObject('Taffy', 0.55, Taffy, "0030243349031")
    
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
