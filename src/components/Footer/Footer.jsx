import React from 'react';
import "./Footer.css";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import footericon1 from "../../assets/footerIcon3.svg";
import footericon2 from "../../assets/footerIcon2.svg";
import footericon3 from "../../assets/footerIcon1.svg";

function Footer() {
  return (
    <div className='FooterContainer'>
      <div className='FooterContent'>
        <div className='text1'>
          <p>© 2025 TheMealDB<br />Proudly built in the UK</p>
        </div>
        <div className='text2'>
          <p>Socials:</p>
          <span>
            <FaFacebookSquare />
            <FaTwitterSquare />
            <IoLogoDiscord />
          </span>
          <img src={footericon2} className='img' alt="Icon 2" />
          <img src={footericon3} className='img' alt="Icon 3" />
          <img src={footericon1} className='img' alt="Icon 1" />
        </div>
        <div className='text3'>
          <p>About</p>
          <p>Faq</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
