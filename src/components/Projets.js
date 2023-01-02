import React from 'react'
import Navbar from './Nav'
import TypingAnimation from './typingAnim'

const Projets = () => {
    return (
        <div className='projet'>
            <header><Navbar /></header>
            <main>
                <h1><TypingAnimation className="text anim" text="Il n'y a rien ici pour l'instant, repasse plus tard ! " /></h1>
            </main>

        </div>
    )
}

export default Projets