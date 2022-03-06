import React from 'react';
import logo2 from "../images/locationlogo.jpg"
import logo1 from "../images/mountpic.jpg"






export default function Card(props)
{
return(

<div className='card'>
  
    <img src={logo1} alt="logo1" className='card--img'>
    </img>

    <div className='card-status'>
      <img src={logo2}  alt="logo2"  className='card--locationlogo' ></img>
  
      <span >{props.location}</span>
      <button className='url-btn' onClick={props.googlemapsurl}>
      <a href={props.googlemapsurl} className="url">
          Click to view on map
        </a>
        </button>
      <h1 className='title'>{props.title}</h1>
      <span className='startend' >{props.startdate} - </span>
      <span className='startend'>{props.enddate}</span>
      <p className='bold'>{props.discription} </p>
      <hr className="hr-line" />
    </div>
</div>   
    
  
)
}