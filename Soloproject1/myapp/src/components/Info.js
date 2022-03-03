import React from "react"
import logo from "../images/pic.jpg"
// import logo1 from "../images/mail-logo.png"

// import logo2 from "../images/Linpic.png"



export default function info(){
    return (
       
        <main>
            <img className="nav--icon" src={logo} alt="logo"/>
            <h1 className="nav--logo_text">Shivali Shyam Umbarkar</h1>
            <h3 className="nav--title">-- Frontend Developer --</h3>
            <button id="E-btn" >
             <font-awesome-icon icon="fa-brands fa-linkedin" />Email
            </button>
            
            <button id="L-btn"  >
         <font-awesome-icon icon="fa-brands fa-linkedin" /> Linkedin
                </button>
        </main>
    )
    
}