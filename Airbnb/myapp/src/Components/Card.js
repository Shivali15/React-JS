import React from 'react';
// import logo1 from "../images/card1pic.jpg"
import logo2 from "../images/star.png"




export default function Card(props)
{
return(

<div className='card'>
    <img src={`../images/${props.img}`} alt="logo1" className='card--img'>
    </img>
    <div className='card-status'>
  <img src={logo2}  alt="logo2"  className='card-star' width="20px" height="20px" ></img>
   <span >{props.rating}</span>
   <span className='grey'>({props.reviewcount}) *</span>
    <span className='grey'>{props.country}</span>
    <p className='title'>{props.title}</p>
   <p><span className='bold'>From ${props.price} </span> /Person </p>
    </div>
</div>   
    
  
)
}