import React from 'react'
import CandyItemObject from './candyItemObject'
import CandyItem from './candyItem'



export default function CandyShopWrapper(props) {
    let snickers = new CandyItemObject('Snickers',1.5,'https://toppng.com/uploads/preview/snickers-png-11552942897mvei4yipwi.png')
    let twizzlers = new CandyItemObject('Twizzlers',1,"https://i5.walmartimages.com/asr/be06ff09-5144-4510-8ac6-172d9d0309e9.31b2d286d7704c133d8f0a847cfe161a.jpeg")
    
    
    let candies = [snickers,twizzlers,twizzlers,twizzlers,twizzlers,twizzlers]
    
    
    
    return (
        <div>
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
