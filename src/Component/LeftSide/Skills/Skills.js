import React, { useContext } from 'react';
import { themeContext } from '../../../Context';

const Skills = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    return (
        <div className='lg:p-4 mt-4 lg:mt-[-15px] mx-auto text-center'

        >
            <div className='bg-[#c9eef7] p-3 rounded-lg'
                style={{
                    background: darkMode ? '#313b3e' : '#6c9da8db',
                    color: darkMode ? 'white' : 'black'
                }}
            >
                <h2 className='text-lg font-bold'>Skills:</h2>

                <div className='grid grid-cols-4 mx-auto gap-1 mt-3'>
                    <span className='buttonSkills'>HTML</span>
                    <span className='buttonSkills'>CSS</span>
                    <span className='buttonSkills'>Bootstrap</span>
                    <span className='buttonSkills'>Tailwind</span>
                    <span className='buttonSkills'>JavaScript</span>
                    <span className='buttonSkills'>React JS</span>
                    <span className='buttonSkills'>MongoDB</span>
                    <span className='buttonSkills'>Firebase</span>
                    <span className='buttonSkills'>Node JS</span>
                    <span className='buttonSkills'>Express JS</span>
                    <span className='buttonSkills'>React Query</span>

                </div>
            </div>

        </div>
    );
};

export default Skills;