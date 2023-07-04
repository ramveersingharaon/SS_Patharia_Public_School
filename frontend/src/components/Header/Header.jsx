import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import logo from '../../../public/image/logo.png'
// import { useSelector } from 'react-redux'



const Header = () => {
    // const token = localStorage.getItem('token');
    // const { isAuthentication } = useSelector(state => state.login)
    const [toggle, setToggle] = useState(true)
    return (
        <div className={toggle ? "header active" : "header"}>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <nav className="nav">
                <ul className="ul" onClick={() => setToggle(!toggle)}>
                    <NavLink to='/' className='navlink'> <li>Home</li></NavLink>
                    <NavLink to="/about" className='navlink'> <li>About</li></NavLink>
                    <NavLink to="/contact" className='navlink'> <li>Contact Us</li></NavLink>
                </ul>
                <div className="profile">
                    <NavLink to="/login" className='navlink'>   <BsFillPersonFill style={{ fontSize: "25px" }} /></NavLink>
                </div>
                <div className="icon" onClick={() => setToggle(!toggle)}>
                    <FaBars className='bars' />
                    <MdOutlineClose className='close' />
                </div>
            </nav>

        </div>
    )
}

export default Header
