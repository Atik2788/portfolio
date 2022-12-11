import React, { useContext } from 'react';
import Header from '../LeftSide/Header/Header';
import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import { themeContext } from '../../Context';

const Navbar = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  


    return (
        <div 
        
        style={{
            background: darkMode ? '#313b3e' : '#9de2f2db',
            color: darkMode ? 'white' : 'black'
          }}
          >
            <div className='b-black px-7'>
                <div className='n-wrapper '>
                    <div className=' n-left'>
                        <div className='n-name'>Atikur Rahman</div>
                        <Toggle></Toggle>
         
                    </div>

                    <div className='hidden lg:flex items-center lg:n-right'>
                        <div className='n-list'>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                {/* <li>Services</li> */}
                                <li>Projects</li>
                            </ul>
                        </div>
                        <a target="_blank" href='https://drive.google.com/file/d/1xxcA89TiWbvKhHwJjk31wnbhWO9kzz9a/view?usp=sharing' className=''>
                            <button className='button'>Resume</button>
                        </a>

                        {/* <button href='Contact' className='button'>
                            Contact
                        </button> */}
                    </div>
                </div>
            </div>
            {/* <Header></Header> */}
        </div>
    );
};

export default Navbar;