import React, {useState} from 'react'
import { FiSun } from "react-icons/fi";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import './Navbar.css'

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

  return (
    <header>
        <nav className='flex between wrapper navbar'>
            <a href="#" className='logo'>
                <span>R</span> Rahma.
            </a>

            {/* DESKTOP MENU */}

            <ul className='flex gap-2 desktop-menu'>
                <li>
                    <a href="#" className='link'>Home</a>
                </li>
                <li>
                    <a href="#" className='link'>Services</a>
                </li>
                <li>
                    <a href="#" className='link'>About Me</a>
                </li>
                <li>
                    <a href="#" className='link'>Projects</a>
                </li>
                <li>
                    <a href="#" className='link'>Testimonials</a>
                </li>
                <li>
                    <a href="#" className='link'>Contact Me</a>
                </li>
            </ul>

            <div className='flex gap-2 nav-action'>
                <a href="#" className='icon-container border-inverse'>
                    <FiSun />
                </a>
                <a href="#" className='btn '>
                    Let's Talk
                </a>
                <a href="#" className='hamberger' onClick={toggleMenu}>
                    {isMenuActive ? <FaXmark /> : <FaBarsStaggered />}
                </a>
            </div>

             {/* MOBILE MENU */}

            <ul className={`mobile-menu ${isMenuActive ? 'mobile-menu-active' : null}`}>
                <li>
                    <a href="#" className='link'>Home</a>
                </li>
                <li>
                    <a href="#" className='link'>Services</a>
                </li>
                <li>
                    <a href="#" className='link'>About Me</a>
                </li>
                <li>
                    <a href="#" className='link'>Projects</a>
                </li>
                <li>
                    <a href="#" className='link'>Testimonials</a>
                </li>
                <li>
                    <a href="#" className='link'>Contact Me</a>
                </li>
                <li>
                    <a href="#" className='btn'>
                        Let's Talk
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar