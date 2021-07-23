import React from 'react'
import Logo from '../images/logo.png'

export default function header() {
    return (
        <div className="header">
            <img className="logoTop" alt="logo" src={Logo}/>
            <div className="dynamic">
                Insert Dynamic Here
            </div>
        </div>
    )
}
