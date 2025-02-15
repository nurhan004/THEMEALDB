import React from 'react'
import logo from "../../assets/logo.png"
import "./Header.css"
import { useState } from 'react';
import { TbMenuDeep } from "react-icons/tb";
import { Link } from 'react-router-dom';
// import Search from '../../pages/Search/Search';
import { useNavigate } from 'react-router-dom';


function Header() {
  const [text,setText] = useState("")
  const navigate = useNavigate()

  const handLeKeyDown = (e) => {
    if (e.keyCode == 13) {
      navigate(`search/${text}`)
      setText ('')
    } 
  }

  return (
    <div className='HeaderContainer'>
      <div className='HeaderContent container'>
        <img src={logo} />
        <div className='BtnContent '>

            <Link to="/">
          <button className='HomeBtn'>Home</button>
            
            </Link>
            <Link to="/api">
          <button className='ApiBtn'>Api</button >
            </Link>
          <input value={text} type="text" placeholder='Search' className='InputContent' onChange={(e)=> setText(e.target.value)} onKeyDown={handLeKeyDown} />
        </div>
        <div className='burger'>
          <TbMenuDeep className='iconMenu' />
        </div>
      </div>
    </div>
  )
}

export default Header