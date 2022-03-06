import React from 'react';
import logo from "../images/travelpic.png"


export default function Navbar()
{
return(
  <nav >
            <img className="nav--icon" src={logo} alt="logo"/>
    <h3 className='nav--heading'>My Travel Journal</h3>
  </nav>
)
}