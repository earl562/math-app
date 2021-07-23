import axios from 'axios'
import React, { Component } from 'react'
import CandyItemObject from './candyItemObject'
import CandyItem from './candyItem'
import ChocolateBar from '../images/chocolate-bar2.png'
import CottonCandy from '../images/cotton-candy.png'
import Taffy from '../images/taffy.png'
import GummyBear from '../images/gummy-bear.png'
import Candy from '../images/hard-candy.png'
import Lollipops from '../images/lollipops.png'
import Food from './foodFactsAPI'



// export default function CandyShopWrapper(props) {
//      chocolateBar = new CandyItemObject('Chocolate Bar', 2.25, ChocolateBar, "03424005")
//      cottonCandy = new CandyItemObject('Cotton Candy', 3.05, CottonCandy, "0014200003259")
//      gummyBear = new CandyItemObject('Gummy Bear', 5.00, GummyBear, "4001686301265")
//      lollipops = new CandyItemObject('Lollipops', 1.50, Lollipops, "4004363300025")
//      candy = new CandyItemObject('Hard Candy', 0.12, Candy, "40144016")
//      taffy = new CandyItemObject('Taffy', 0.55, Taffy, "0030243349031")
    
//      candies = [chocolateBar,cottonCandy,gummyBear,lollipops,candy,taffy]
    
    
    
//     return (
//         <div className="candyBox">
//             {
//                 candies.map((candy,index)=>{
//                     return (
//                         <CandyItem
//                             key={index}
//                             object={candy}
//                             updateMoney={props.updateMoney}
//                         />
//                     )
//                 })
//             }
//         </div>
//     )
// }


export default class CandyShopWrapper extends Component {

    constructor(props){
        super(props)
        this.state = {
        }

        this.apiCall = this.apiCall.bind(this)
    }

    
    chocolateBar = new CandyItemObject('Chocolate Bar', 2.25, ChocolateBar, "03424005")
    cottonCandy = new CandyItemObject('Cotton Candy', 3.05, CottonCandy, "0014200003259")
    gummyBear = new CandyItemObject('Gummy Bear', 5.00, GummyBear, "4001686301265")
    lollipops = new CandyItemObject('Lollipops', 1.50, Lollipops, "4004363300025")
    candy = new CandyItemObject('Hard Candy', 0.12, Candy, "40144016")
    taffy = new CandyItemObject('Taffy', 0.55, Taffy, "0030243349031")
    
    candies = [this.chocolateBar, this.cottonCandy, 
        this.gummyBear, this.lollipops, 
        this.candy, this.taffy]

    apiCall(){
        const barcodes= ["03424005", "0014200003259", "4001686301265", 
        "4004363300025", "40144016", "0030243349031", "03272466"]

        barcodes.map((id) => {
            axios.get(`https://world.openfoodfacts.org/api/v0/product/${id}.json`)
                .then(res => {
                        console.log(res.data.product.nutriments.sugars)
                        this.setState({ [id]:  res.data.product.nutriments.sugars});
                })
        })
        
    }

    componentDidMount() {
        this.apiCall()
    }        

    render() {
        return (
            <div className="candyBox">
                {
                    this.candies.map((candy,index)=>{
                        return (
                            <CandyItem
                                key={index}
                                object={candy}
                                updateMoney={this.props.updateMoney}
                                nutriments={this.state[candy.barcode]}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
