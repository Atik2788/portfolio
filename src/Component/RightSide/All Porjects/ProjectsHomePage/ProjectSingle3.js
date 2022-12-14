import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../../../Context';

const ProjectSingle3 = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className='projectsCard p-2 rounded-lg mt-7'

            style={{
                background: darkMode ? '#053783' : '#19909f',
                color: darkMode ? '#27dccd' : 'black'
            }}
        >
            <div className="">
                <div className='lg:w-[650px] text-left'>
                    <p className='text-xs font-bold'>E-Learn ( A responsive project for online learning platform)</p>
                    <p className='text-xs font-semibold mt-1'>Technologies:</p>
                    <div className='grid lg:grid-cols-6 grid-cols-3 mx-auto gap-1 mt-1 text-center'>
                        <span className='buttonSkills'>Tailwind</span>
                        <span className='buttonSkills'>Daisy UI</span>
                        <span className='buttonSkills'>JavaScript</span>
                        <span className='buttonSkills'>React JS</span>
                        <span className='buttonSkills'>React Router Dom</span>
                        <span className='buttonSkills'>Context AP</span>
                        <span className='buttonSkills'>Firebase</span>
                        <span className='buttonSkills'>Node JS</span>
                        <span className='buttonSkills'>Express JS</span>
                    </div>
                </div>

                <div className='mt-3'>
                    <Link to='/project3'><p className='text-center mb-3 buttonDetails w-16'><button className=''>Details</button></p></Link>
                </div>

            </div>
        </div>
    );
};

export default ProjectSingle3;