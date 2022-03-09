import React from 'react';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"



export default function App()
{
const card=data.map(item =>{
  return(
    <Card 
    key={item.id}

    // img={item.img}
    // discription={item.discription}
    // startdate={item.startdate}
    // enddate={item.enddate}
    // location={item.location}
    // title={item.title}
    // gogglemapurl={item.googlemapsurl}
       item={item}
    />

  )
})

 return(
  <div>
    <Navbar />
    
    <section className='card-list'>
       {card}
    </section>
 

  </div>
)
}
