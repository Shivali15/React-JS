import React from 'react';
import logo2 from "../images/locationlogo.jpg"
// import logo1 from "../images/mountpic.jpg"


export default function Card(props)
{
return(

<div className='card'>
  
    {/* <img src={props.item.img} alt="logo1" className='card--img' /> */}
      <img src={props.item.img} alt="card-img" className="card--img" />
   
  
    <div className='card-status'>
      <img src={logo2}  alt="logo2"  className='card--locationlogo' ></img>
  
      <span >{props.item.location}</span>
      <button className='url-btn' onClick={props.item.googlemapsurl}>
      <a href={props.item.googlemapsurl} className="url">
          Click to view on map
        </a>
        </button>
      <h1 className='title'>{props.item.title}</h1>
      <span className='startend' >{props.item.startdate} - </span>
      <span className='startend'>{props.item.enddate}</span>
      <p className='bold'>{props.item.discription} </p>
      <hr className="hr-line" />
    </div>
</div>   
    
  
)
}