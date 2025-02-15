import React from 'react'
import "./HeroBlock.css"
import ramen from "./img/HeroImg.png"

function HeroBlock() {
  return (
    <div className='HeroBlockContainer'>
        <div className='HeroBlockContent'>
            <img src={ramen} alt="" />
            <div>
                <h1>Welcome to TheMealDB</h1>
                <p className='welcomP'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.We also offer a free recipe API for anyone wanting to use it, with additional features for subscribers.</p>
                <button className='PayPalBtn'>Pay <span>Pal</span></button>
                <p>Click button above to upgrade free Recipe API to premium.
                $3 month and cancel anytime. Currently 54 supporters.</p>
            </div>
        <img src={ramen} alt="" />
        </div>
    </div>
  )
}

export default HeroBlock