import React from 'react';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"



export default function App()
{
const card=data.map(item =>{
  return(
    <Card 
//passing props to card components to display this data
    // created props 
    img={item.img}
    rating={item.rating}
    reviewcount={item.reviewCount}
    country={item.country}
    title={item.title}
    price={item.price}
    
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
