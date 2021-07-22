import React from 'react'
import CandyItemObject from './candyItemObject'


const imageStyles={
    height: "100px",
    width: "100px"
}

export default function CandyItem(props) {

    //Name-value-pathToPicture
    return (
        <div>
            <img src={props.object.path} style={imageStyles} onClick = {() => props.updateMoney(props.object.price)}/>
            <p>{props.object.name}</p>
            <p>{props.object.price}</p>
        </div>
    )
}