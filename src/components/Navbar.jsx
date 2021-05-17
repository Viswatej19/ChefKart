import React, {useState } from 'react';
import logo from '../images/logo.jpeg';

function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 200){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="#" className='logo'>
            <b><h1 id='h1chef'>ChefKart</h1></b>
            </a>
            <input type="checkbox" className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#" className='active'>Attendance</a></li>
                <li><a href="#" className='active'>Subscription</a></li>
                <li><a href="#" className='active'>About</a></li>
                <li><a href="#" className='active'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;