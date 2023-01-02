import React from 'react'
import Navbar from './Nav'
import presentation from "../image/presentation.png"
import Footer from './Footer'

const Apropos = () => {
  return (
    <div className='aPropos'>
      <header><Navbar /></header>
      <main>
        <div className="image">
          <p>Je suis un jeune développeur diplômé d'un Bac STMG aujourd'hui en formation au sein du centre M2I Formation pour devenir Front-End, passionné du monde numérique depuis toujours, je souhaite m'épanouir dans ce domaine durant toute ma vie professionnelle.</p>
          <img src={presentation} alt="" />
          <p>Malgrés mon grand interet pour l'informatique, j'ai aussi d'autres passions et principalement le sport. Je pratique du foot en club depuis une dizaine d'années. Si tu es plus curieux tu peux en apprendre d'avantage via mes réseaux sociaux, juste en bas !</p>
        </div>

        <p>Je suis actuellement à la recherche d'un stage dans le développement web pour la durée d'un mois minimum du 27 mars 2023 au 21 avril 2023.<br/> Peut importe le language utilisé pour ce stage, mon envie de découverte m'y fera prendre goût ! </p>
      </main>

      <Footer />
    </div>
  )
}

export default Apropos