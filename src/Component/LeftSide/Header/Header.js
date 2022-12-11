import React, { useContext, useEffect } from 'react';
import './Header.css'
import Typewriter from 'typewriter-effect';
import Resume from '../Resume.pdf'
import { themeContext } from '../../../Context';
import Atik1 from './atik1.png'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";


import Particles from "react-tsparticles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

const Header = () => {


    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    
    return (
        <div className='lg:p-4 mx-auto text-center'

        >
            <div className='bg-[#c9eef7] p-3 rounded-lg'
                style={{
                    background: darkMode ? '#313b3e' : '#6c9da8db',
                    color: darkMode ? 'white' : 'black'
                }}
            >
                <div className='mt-3'>
                    <img src={Atik1} className='h-36 rounded-full mx-auto border-2 border-[#ff9923]' alt="Atikur Rahman Shanta" />
                </div>

                <div>
                    <h1 className='text-lg font-bold mt-2'>
                        Md. Atikur Rahman Shanta
                    </h1>
                    <div className='mb-7'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 80,
                                strings: [
                                    'Web Developer',
                                    'MERN Stack Developer',
                                    'Front-End Developer',
                                    'React JS Developer',
                                ]
                            }}
                        />
                    </div>

                    <div className='my-4 flex gap-5 items-center justify-center'>
                        <a target='_blank' href="https://www.facebook.com/atik.ahmed.75054/"><BsFacebook/></a>
                        <a target='_blank' href="https://github.com/Atik2788"><BsGithub/></a>
                        <a target='_blank' href="https://www.linkedin.com/in/md-atikur-rahman-shanta-88a182241/"><BsLinkedin/></a>
                    </div>

                    <div className='mb-4 mt-5'>
                        <a href={Resume} download className=''>
                            <button className='button'>Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;