import React from 'react'
import Navbar from './Nav'
import Loupe from "../image/loupe.png"

const Projets = () => {
    return (
        <div className='projet'>
            <header><Navbar /></header>
            <main>
                <h2>Tu vois mal ? Scroll pour jetter un oeil à la loupe ! </h2>
                <div className="imageloupe">
                    <img src={Loupe} alt="" />
                </div>
            </main>

        </div>
    )
}

export default Projets