import React from 'react'
import Logo from '../images/logo.png'

export default function header() {
    return (

        <div class="firstDiv">
            <div class="right-col">
                
                <button className="submit2">
                        Set Amount
                </button>
            </div>
            <img className="logoTop" alt="logo" src={Logo}/>
        </div>
    )
}
