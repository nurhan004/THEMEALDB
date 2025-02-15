import React from 'react'
import "./SearchBlock.css"
import { IoSearch } from "react-icons/io5";


function SearchBlock() {
  return (
<div class="search-container">
    <div class="line"></div>
    <div className='textContent'>

    <div class="search-box">
        <input type="text" placeholder="Search for a Meal..." />
        <span>< IoSearch/>
        </span>
    </div>
    <div class="stats">
        🍽️ <b>Total Meals:</b> 303
        🦐 <b>Total Ingredients:</b> 575
        🖼️ <b>Images:</b> 303
    </div>
    </div>
    <div class="line"></div>
</div>

  )
}

export default SearchBlock