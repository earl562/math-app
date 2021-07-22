import React from 'react'
import Logo from '../images/eveicon.png'

export default function footer() {
    return (
        <div className="footer">
            <img className="logo" alt="logo for school" src={Logo}/>
            <div className="team">Team Cassiopeia</div>
        </div>
    )
}
