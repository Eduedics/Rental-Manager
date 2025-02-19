import './NavbarStyles.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes,FaBlog } from "react-icons/fa"
import { BsLock} from "react-icons/bs"

export default function Navbar() {
    const [active, setActive] = React.useState(false); 

    function handleClick() {
        setActive(!active);
    }

    return (
        <header className='NavBar'>
            <h3>Smart <span>homes</span></h3>
            <section className='links'>
                <ul className={`navlink ${active ? "active" : ""}`}> {/* Fixed class toggle */}
                    <li><NavLink className={({ isActive }) => isActive ? "active" : "link"} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active" : "link"} to="/about">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active" : "link"} to="/contact">Contact</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active" : "link"} to="/blog"><FaBlog size={16}/></NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active" : "link"} to="/LOGIN"><BsLock size={16}/></NavLink></li>
                </ul>
                <div className="menu-icon" onClick={handleClick}>
                    {active ? <FaTimes size={20} className='humbugle' /> : <FaBars size={20} className='humbugle' />}
                </div>
            </section>
        </header>
    )
}
