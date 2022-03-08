import React from 'react';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"








//passing props to card components to display this data
    // created props 


    // img="card1pic.jpg"
    // rating="5.0"
    // reviewcount={6}
    // country="INDIA"
    // title="Life  lessons with neeraj chopra "
    // price={136}
    


export default function App() {
  //By mapping data : if we change data the page will automatically update 
  const cards = data.map((item) => {
    return (
      <Card

      //specific props that item is item
    // item={item}
        key={item.id} //we use this map function to convert an array of raw data into an array of JSX elements that can be displayed on the page
       
       
        // img={item.img}
        // rating={item.rating}
        // reviewCount={item.reviewCount}
        // country={item.country}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        // location={item.location}
        item={item}

         //seperates all of the properties of this item as sperate prop into card component
//      {...item}
        //this means spreading objects as prop, in this case we can directly write it as props.img instead of props.item.img etc in Card.js
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}