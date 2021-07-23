import React from 'react'
import Logo from '../images/logo.png'

export default function header() {
   function changeTheme(){
    var elements = document.getElementsByClassName('candyBox'); 
    for(var i = 0; i < elements.length; i++)
     {		elements[i].style.backgroundColor = "#F2C4E6" ;	}

   } 
    
    return (

        <div class="firstDiv">
            <div class="right-col">
                
                <button className="submit2" onClick="changeTheme">
                         change theme
                </button>
            </div>
            <img className="logoTop" alt="logo" src={Logo}/>
        </div>
    )
}
