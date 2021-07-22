import React from 'react'
import CandyItemObject from './candyItemObject'


const imageStyles={
    height: "100px",
    width: "100px",
    display: "inline-block"
}

export default function CandyItem(props) {

    //Name-value-pathToPicture
    return (
        <div className="candyItem">
            <img src={props.object.path} style={imageStyles} onClick = {() => props.updateMoney(props.object.price)}/>
            <p>{"$" + props.object.name.toFixed(2)}</p>
            <p>${props.object.price}</p>
        </div>
    )
}