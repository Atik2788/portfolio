import React from 'react';
import Header from '../Header/Header';
import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import Resume from '../../Component/Services/Resume.pdf'

const Navbar = () => {
    return (
        <div className=' bg-black bg-img bg-img2 order-2'>
            <div className='b-black px-7'>
                <div className='n-wrapper '>
                    <div className=' n-left'>
                        <div className='n-name'>Atikur Rahman</div>
                        <Toggle></Toggle>
         
                    </div>

                    <div className='hidden lg:flex pt-3 lg:n-right'>
                        <div className='n-list'>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                {/* <li>Services</li> */}
                                <li>Projects</li>
                            </ul>
                        </div>
                        <a target="_blank" href='https://drive.google.com/file/d/1xxcA89TiWbvKhHwJjk31wnbhWO9kzz9a/view?usp=sharing' className='mr-3'>
                            <button className='button'>Resume</button>
                        </a>

                        {/* <button href='Contact' className='button'>
                            Contact
                        </button> */}
                    </div>
                </div>
            </div>
            <Header></Header>
        </div>
    );
};

export default Navbar;