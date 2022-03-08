import React from 'react';
// import logo1 from "../images/card1pic.jpg"
import logo2 from "../images/star.png"




// export default function Card(props)
// {

//   let updatetext
//    if(props.openSpots === 0){              //props.item    when in app item={item}
//      updatetext="SOLD OUT"
//   } else if(props.location=== "online"){     //props.item
//     updatetext="ONLINE"
//   }
 
//   //fixed components



// return(

// <div className='card'>
//   {updatetext && <div className='card-update'>{updatetext} </div>}
//     <img src={logo1}  alt="logo1" className='card--img'>
      
//     </img>
  

//     <div className='card--status'>
//   <img src={logo2}  alt="logo2"  className='card--star' ></img>
//    <span >{props.rating}</span>      
//    <span className='grey'>({props.reviewcount}) *</span>
//     <span className='grey'>{props.country}</span>
//     <p className='title'>{props.title}</p>
//    <p><span className='bold'>From ${props.price} </span> /Person </p>    
//     </div>
// </div>   
    
  
// )
// }

// src={`../images/${props.item.img}`}


export default function Card(props) {
  //recieving props here from App.js
  let badegText;
  if (props.item.openSpots === 0) {
    badegText = "SOLD OUT";
  } else if (props.item.location === "online") {
    badegText = "ONLINE";
  }
  return (
    <div className="card">
      {badegText && <div className="card-sold-out">{badegText}</div>}
      <img src={props.item.img} alt="card-img" className="card--img" />
      <div className="card-status">
        <img src={logo2} alt="star-img" className="card--star" />
        <span> {props.item.rating}</span>
        <span className="grey">({props.item.reviewCount}) * </span>
        <span className="grey">{props.item.country}</span>
      </div>
      <p className='title'>{props.item.title}</p>
      <p>
        <span className="bold">from $ {props.item.price}</span> /person{" "}
      </p>
    </div>
  );
}