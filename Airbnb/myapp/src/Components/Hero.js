import React from 'react';
import logo from "../images/grid.jpg"

export default function Hero()
{
return(
  <section className='hero'>
      <img src={logo}   alt="logo"  className='hero--photo'></img>
      <h1 className='hero--header'> Online Experiences</h1>
      <p className='hero--text'>Join unique interactive activities led by
          one-of-kind hosts-all without leaving home.
      </p>
  </section>
            
    
  
)
}