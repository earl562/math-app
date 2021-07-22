import React from 'react'


const imageStyles={
    height: "100px",
    display: "inline-block"
}

export default function CandyItem(props) {

    //Name-value-pathToPicture
    return (
        <div className="candyItem">
            <img src={props.object.path} alt="candy item" style={imageStyles} onClick = {() => props.updateMoney(props.object.price)}/>
            <p>{props.object.name}</p>
            <p>${props.object.price.toFixed(2)}</p>
        </div>
    )
}