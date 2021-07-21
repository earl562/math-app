import React, { Component } from 'react'

export default class money extends Component {
        constructor (props) {
            super(props)
            this.state = {
                allowance: Math.random()*10
            }
            this.updateMoney = this.updateMoney.bind(this)
            this.setMoney = this.setMoney.bind(this)
            this.randomMoney = this.randomMoney.bind(this)
        }

updateMoney() {
    this.setState ({allowance: this.state.allowance-1})
}

setMoney() {
    this.setState ({allowance: 10})
}

randomMoney() {
    this.setState ({allowance: Math.random()*10})

}

    render() {
        return (
            <div>
                You have ${this.state.allowance.toFixed(2)}
                <button onClick ={this.setMoney} > Get $10 </button>
                < button onClick ={this.randomMoney} > Get Random Amount </button>
            </div>
        )
    }
}




