import React from 'react'
import { Link } from 'react-router-dom'
import { RiQuestionnaireFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className='car-parking-header'>
      <div className='top'>
        <span className='logo'><Link to={"/"}><img src='/images/logo.png' alt=''/></Link></span>
        <span className='link'><Link to={"/faqs"}><RiQuestionnaireFill className='faq-icon' title='FAQs'/></Link></span>
      </div>
      <div className='navbar'>
        <ul>
            <li><Link className='nav-links' to={"/Home"}>Home</Link></li>
            <li><Link className='nav-links' to={"/About"}>About Us</Link></li>
            <li><Link className='nav-links' to={"/Mybooking"}>My Booking</Link></li>
            <li><Link className='nav-links' to={"/Faqs"}>FAQs</Link></li>
            <li><Link className='nav-links' to={"/Blog"}>Blog</Link></li>
            <li><Link className='nav-links' to={"/Contact"}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
