import React from "react"
import logo from "../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import { Link } from "gatsby"
import PageLinks from "../constants/links"


const Navbar = ({toggleSidebar}) => {

  return (
  <nav className='navbar'>
    <div className='nav-center'>
      <div className='nav-header'>
        <Link to='/'><img src={logo} className='nav-logo' alt="logo" /></Link>
        
        <button type='button' aria-label='open menu' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass='nav-links'></PageLinks>
    </div>
  </nav>)
}

export default Navbar
