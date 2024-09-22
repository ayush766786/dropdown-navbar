import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import './Navbar.css'
import { useState } from 'react';
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const toggleMenu = () => {
    console.log("hello ji")
    setOpen(!open)
  }
  const closeMenu = () => {
    setOpen(false)
  }

  // const toggleDropdown = () => {
  //   console.log("dropdown")
  //   setDropdown(!dropdown)
  // }

  const handleMouseEnter = () => {
    setDropdown(true)
  }
  const handleMouseLeave = () => {
    setDropdown(false)
  }

  return <>
    <div className='navbar'>
      <div className='logo'>Ayush</div>
      <div>
        <nav className={open ? 'nav open' : 'nav'}  >

          <NavLink to="/" activeclassname="active" onClick={closeMenu}>Home</NavLink>
          {/* <NavLink to="/about" activeclassname="active" onClick={closeMenu}>About</NavLink> */}

          <div className='dropdown' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >

            <NavLink to="/about" activeclassname="active" onClick={closeMenu}>About</NavLink>
            <button className='dropbtn'><RiArrowDropDownLine /></button>
            {dropdown && (
              <div className='dropdown-content'>
                <NavLink to="/about/team">Our Team</NavLink>
                <NavLink to="/about/story">Our Story</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" activeclassname="active" onClick={closeMenu}>Contact</NavLink>


        </nav>
      </div>
      <div className='icon' onClick={toggleMenu}>
        {
          open ? <FaTimes /> : <FaBars />
        }
      </div>


    </div>

  </>
}
export default Navbar;