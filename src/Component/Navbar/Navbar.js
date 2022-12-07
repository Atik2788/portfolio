import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Md. Atikur Rahman Shanta</div>
                <span>Toggle</span>
            </div>

            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <button className='button'>
                    Contact
                </button>
            </div>
        </div>
    );
};

export default Navbar;