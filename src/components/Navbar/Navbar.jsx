import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
                <h1>Coin <span className="primary">Verse</span></h1>
                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Featured">Featured</a>
                    </li>
                    <li className="nav-item">
                        <a href="#earn">Earn</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn' href="#developers">Connect Wallet</a>
                    </li>
                </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}

                </div>
            </div>
        </div>
    )
};

export default Navbar;