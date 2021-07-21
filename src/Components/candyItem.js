import React from 'react'
import Money from './money.js'
export default function candyItem(props) {
    
    

    return (
        <div>
            <candyItem props={props.state.updateMoney}
            />
            <p>"path"</p>
            <button onClick={props.updateMoney}
        </div>
        
    )
}
