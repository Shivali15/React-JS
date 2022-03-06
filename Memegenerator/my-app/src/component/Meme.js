import React from 'react'
import memesdata from '../memedata.js'



export  default function Meme()
{
    let url

 function getmemeimage(){
     const memearray=memesdata.data.memes
     const randomNumber = Math.floor(Math.random() * memearray.length)
      url =memearray[randomNumber].url
     console.log(url)
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
    </main>
  )
}