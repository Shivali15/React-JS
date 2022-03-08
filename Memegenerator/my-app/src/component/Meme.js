import React from 'react'
import memesdata from '../memedata.js'



export  default function Meme()
{


//create new state :
const [meme , setmeme] =React.useState({
  toptext:"",
  bottomtext:"",
  randomimage:"http://i.imgflip.com1bij.jpg"
})
// new state variable
const [allmeme , setallmeme]=React.useState(memesdata)

// using useEffect which having 2 parameters : 1.callback-function 2. dependencies array
 React.useEffect(()=>{
    fetch("https://i.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setallmeme(data.data.memes));

 },[])     // empty array : dependencies array
//  console .log(allmeme)

 // creating state in react-js
// const [memeimage, setmemeimage] = React.useState("http://i.imgflip.com1bij.jpg")

    let url

 function getmemeimage(){
     const memearray=allmeme.data.memes
     const randomNumber = Math.floor(Math.random() * memearray.length)
      url =memearray[randomNumber].url
    // memearray[randomNumber].url

    setmeme( prevmeme => ({
      //all of theproperties of pervious meme
      ...prevmeme,
      randomimage:url
    }))

 }
 function handlechange(event){
   const {name,value}= event.target
   setmeme( prevmeme => ({
      //all of theproperties of pervious meme
      ...prevmeme,
     [name]:value
    }))

 }

  return(
    <main>
      <div className='form'>
        <input
        className='form-input'
        type="text"
         placeholder='top text'
         name='toptext'
         value={meme.toptext}
        onChange={handlechange} />
          

       <input
        className='form-input'
        type="text"
        placeholder='bottom text' 
        name='bottomtext'
        value={meme.bottomtext}
        onChange={handlechange} />



        <button
        className='form-button'
        onClick={getmemeimage}>
         Get a new meme image
       </button>
     </div>

      <div className='meme'>
        <img src={meme.randomimage} className='meme--image'/>
        <h2 className='meme--texttop'>{meme.toptext}</h2>
        <h2 className='meme--textbottom'>{meme.bottomtext}</h2>

      </div>

    </main>
  )
}