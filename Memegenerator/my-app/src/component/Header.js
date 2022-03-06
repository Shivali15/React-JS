import React from 'react';
import logo from '../images/memelogo.jpg'
// import ReactDOM from 'react-dom';

export  default function Header()
{
return(

    <header className='header'>
      <img className='header-logo' src={logo}></img>

     <h2 className='header-title'>Meme Generator</h2>
      <h4 className='header-text'> React Course - Project 3
     </h4>
    </header>
)


}