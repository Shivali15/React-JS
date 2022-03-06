import React from 'react';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"



export default function App()
{
  //By mapping data : if we change data the page will automatically update 
const card=data.map(item =>{
  return(
    <Card 
    key={item.id}

    //specific props that item is item
    // item={item}
      
    
    //seperates all of the properties of this item as sperate prop into card component
     {...item}

    // img={item.img}
    // rating={item.rating}
    // reviewcount={item.reviewCount}
    // country={item.country}
    // title={item.title}
    // price={item.price}
    // openSpots={item.openSpots}
    
    />

  )
})

return(
  <div>
    <Navbar />
    <Hero />
    <section className='card-list'>
     
       {card}
    </section>
 

  </div>
)
}





//passing props to card components to display this data
    // created props 


    // img="card1pic.jpg"
    // rating="5.0"
    // reviewcount={6}
    // country="INDIA"
    // title="Life  lessons with neeraj chopra "
    // price={136}
    