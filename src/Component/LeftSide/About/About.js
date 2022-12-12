import React, { useContext } from 'react';
import { themeContext } from '../../../Context';

const About = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    return (
        <div className='lg:p-4 mt-4 lg:mt-[-15px] mx-auto text-center'>
            <div className='bg-[#c9eef7] p-3 rounded-lg'
                style={{
                    background: darkMode ? '#313b3e' : '#6c9da8db',
                    color: darkMode ? 'white' : 'black'
                }}
            >
                <h2 className='text-lg font-bold'>About</h2>

                <p className='text-xs font-semi-bold text-center mt-2'>I am a hard-working, honest, self-motivated Web Developer with knowledge in, React, Node, MongoDB,  JavaScript,  HTML, CSS, and mobile responsive web Development.</p>
                <p className='text-xs font-semi-bold text-center mb-4'>I already do some projects.</p>

            </div>

        </div>
    );
};


export default About;