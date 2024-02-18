import { useState } from 'react'

export default function Header(){
    // <div className='header'>
    //     <div className="header--">
    //         <img src="" alt="" />
    //         <h1 className="header--title">Meme Generator</h1>
    //     </div>
    //     <p>React Course - Project 3</p>
    // </div>
    return(
        <header className='header'>
            <img 
                src=''
                className='header--image'
            />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </header>
    )

}