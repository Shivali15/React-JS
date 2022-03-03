import React from "react"
import logo from "../images/small-logo.png"


// exporting Navbar() function 
export default function Navbar(){
    return (
        <nav>
            <img className="nav--icon" src={logo} alt="logo"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React course - Project 1</h4>
        </nav>
    )
}