import React, { useEffect } from 'react';
import './Header.css'
import Typewriter from 'typewriter-effect';

const Header = () => {


    return (
        <div className='mt-16 p-4 b-blackHeader lg:w-[850px] mx-auto text-center'>
            <h1 className='lg:text-5xl text-2xl font-bold'>Md. Atikur Rahman Shanta</h1>
            <div className='tex-3xl mb-3'>
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
            <a target="_blank" href='https://drive.google.com/file/d/1xxcA89TiWbvKhHwJjk31wnbhWO9kzz9a/view?usp=sharing' className='mr-3 lg:hidden'>
                <button className='button'>Resume</button>
            </a>
        </div>
    );
};

export default Header;