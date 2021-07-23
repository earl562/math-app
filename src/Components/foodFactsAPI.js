import axios from 'axios'
import React, { Component } from 'react'
import candyItem from './candyItem.js'

export default class foodFactsAPI extends Component {
    constructor(props){
        super(props)
        this.state = {
        }

        this.apiCall = this.apiCall.bind(this)
    }

    

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
            <div>
                
            </div>
        )
    }
}
