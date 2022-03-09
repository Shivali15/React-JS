import React from "react"
import Die from "./components/Die"
// using id from library of react : nanoid 
import {nanoid}  from "nanoid"
// import Confetti from "react-confetti";

export default function App() {

 
 const [dice,setdie]=React.useState(allnewdie()) //state1
 const [tenzies,settenzies]=React.useState(false) //state2

 //using useeffect

 React.useEffect(()=>{
//.every method :look into specific condition if that condition is true then .every method return true 
     const allheld=dice.every(die=>die.isHeld)
     const firstvalue=dice[0].value
     const allsamevalue=dice.every(die=>die.value===firstvalue)
     if(allheld && allsamevalue){
         settenzies(true)
        //  console.log("You won!")
     }

 },[dice]  //dice : newly start game return  allnewdie  again
 )



function generatenewdie(){
    return{
       // generating random numbers  
        value: Math.ceil(Math.random()*6) ,
                 isHeld:false,
                id: nanoid()
    }
}





  function allnewdie()
  {
      //new array to hold my numbers
      const newdie=[]
      //loop of ten items
      for(let i=0;i<10;i++)
      {
    //   //push random number from 1-6 in my array
    //         newdie.push({
    //             value: Math.ceil(Math.random()*6) ,
    //              isHeld:false,
    //             id: nanoid()
    //             })
            newdie.push(generatenewdie())
      } 

// console.log(newdie)
      

      //return array
      return newdie
  }
// console.log(allnewdie())






//components : function ,class
// components are like JavaScript functions which accept arbitrary inputs 
// (called “props”) and return React elements describing what should appear on the screen.
function rolldice(){
    //condition rendering
    if(!tenzies)
    { 

    setdie(olddice =>olddice.map(die=>{
    return die.isHeld ? 
    die:
    generatenewdie()
    
    
    }))
   }
   else{
       settenzies(false)
       setdie(allnewdie())
   }
    
}


function holddice(id){
// console.log(id)

setdie(olddice =>olddice.map(die=>{
    return die.id===id ?
    {...die,isHeld: !die.isHeld}: die
}))
}



//mappinng dice component
const dielement=dice.map(die=>  
(
    //rendering  die component
    //key : to give the elements a stable identity
<Die key={die.id} value={die.value} isHeld={die.isHeld} holddice={()=>holddice(die.id)}/>
))

// using JSX  markup + logic (js)
 return (
     <main>
         
      <h1 className="title">Tenzies</h1>
      <p className="para">Roll until all dice are  the same.
      Click each die to freeze it at its current value between rolls</p>
          <div className='die-container'>
              {dielement} 
        </div>
       <button
        className="roll-btn"
        //handling events
        onClick={rolldice}
        >
            {tenzies ? "NewGame":"Roll"}
        
        </button>


     </main>
 )

}