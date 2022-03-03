import React from "react"
import logo1 from "../images/T-logo.jpg"
import logo2 from "../images/F-logo.jpg"
import logo3 from "../images/In-logo.jpg"
import logo4 from "../images/Untitled.png"



// exporting footer() function 
export default function footer(){
    return (
        <footer>
            
            <img className="twitter--icon" src={logo1} alt="T-logo"/>
            <img className="facebook--icon" src={logo2} alt="F-logo"/>
            <img className="instagram--icon" src={logo3} alt="In-logo"/>
            <img className="linkedin--icon" src={logo4} alt="In-logo"/>

           

          
        </footer>
    )
}