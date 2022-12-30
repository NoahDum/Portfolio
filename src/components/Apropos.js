import React from 'react'
import Navbar from './Nav'
import presentation from "../image/presentation.png"

const Apropos = () => {
  return (
    <div className='aPropos'>
        <header><Navbar/></header>
        <div className="image">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat suscipit vero sapiente accusantium quia. Sapiente, inventore ex corporis optio repellendus, accusamus perferendis ab voluptates debitis eveniet atque voluptate dolores ratione.</p>
          <img src={presentation} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit fugiat officiis magni odit! Non consectetur saepe esse, odio delectus maiores voluptatum commodi iste libero reiciendis beatae sequi quia ullam eligendi?</p>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at, debitis, facilis iure sit inventore illo exercitationem facere labore voluptate aut sint dignissimos. Ut impedit ipsum velit odio quia necessitatibus.</p>
    </div>
  )
}

export default Apropos