import React from "react"
import Die from "./components/Die"
import {nanoid}  from "nanoid"
// import Confetti from "react-confetti";

export default function App() {

 
 const [dice,setdie]=React.useState(allnewdie())
 const [tenzies,settenzies]=React.useState(false)

 //using useeffect

 React.useEffect(()=>{
     const allheld=dice.every(die=>die.isHeld)
     const firstvalue=dice[0].value
     const allsamevalue=dice.every(die=>die.value===firstvalue)
     if(allheld && allsamevalue){
         settenzies(true)
        //  console.log("You won!")
     }

 },[]
 )



function generatenewdie(){
    return{
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








function rolldice(){
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




const dielement=dice.map(die=>  
(
<Die key={die.id} value={die.value} isHeld={die.isHeld} holddice={()=>holddice(die.id)}/>
))


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
        onClick={rolldice}
        >
            {tenzies ? "NewGame":"Roll"}
        
        </button>


     </main>
 )

}