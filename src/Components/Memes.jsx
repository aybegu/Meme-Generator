import { useState } from 'react'
import memesData from '../memesData'

export default function Memes() {
    
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random * memesArray.length)
        const url = memesArray[randomNumber].url
    }
    
    
    return (
        <main>
            <div className="form">
                <input
                    className='form--input'
                    type="text"
                    placeholder='Top text'
                />
                <input
                    className='form--input'
                    type="text"
                    placeholder='Bottom text'
                />
                <button
                    className='form--button'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}