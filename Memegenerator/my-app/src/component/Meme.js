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
const [allmemeiamges , setallmemeimages]=React.useState(memesdata)


 // creating state in react-js
// const [memeimage, setmemeimage] = React.useState("http://i.imgflip.com1bij.jpg")

    let url

 function getmemeimage(){
     const memearray=allmemeiamges.data.memes
     const randomNumber = Math.floor(Math.random() * memearray.length)
      url =memearray[randomNumber].url
    // memearray[randomNumber].url

    setmeme( prevmeme => ({
      //all of theproperties of pervious meme
      ...prevmeme,
      randomimage:url
    }))
 }

  return(
    <main>
   <form className='form'>
    <input className='form-input'
     type="text"
      placeholder='top text'  />


    <input className='form-input'
     type="text"
      placeholder='bottom text'  />





    <button
     className='form-button' onClick={getmemeimage}>
         Get a new meme image
    </button>


    </form>
    <img src={meme.randomimage} className='meme--image'/>
    </main>
  )
}