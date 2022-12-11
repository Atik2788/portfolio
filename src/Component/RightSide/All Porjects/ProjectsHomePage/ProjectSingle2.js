import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../../../Context';

const ProjectSingle2 = () => {
    
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className='projectsCard p-2 rounded-lg mt-7'
        
        style={{
            background: darkMode ? '#497141' : '#19909f',
            color: darkMode ? '#f7d721' : 'black'
        }}
        >
            <div className="">
                <div className='lg:w-[650px] text-left'>
                    <p className='text-xs font-bold'>Meet-Your-Trainer (A responsive project for a person who provides online physical training)</p>
                    <p className='text-xs font-semibold mt-1'>Technologies:</p>
                    <div className='grid lg:grid-cols-6 grid-cols-3 mx-auto gap-1 mt-1 text-center'>
                        <span className='buttonSkills'>Tailwind</span>
                        <span className='buttonSkills'>Daisy UI</span>
                        <span className='buttonSkills'>JavaScript</span>
                        <span className='buttonSkills'>React JS</span>
                        <span className='buttonSkills'>React Router Dom</span>
                        <span className='buttonSkills'>Context AP</span>
                        <span className='buttonSkills'>JWT</span>
                        <span className='buttonSkills'>MongoDB</span>
                        <span className='buttonSkills'>Firebase</span>
                        <span className='buttonSkills'>Node JS</span>
                        <span className='buttonSkills'>Express JS</span>
                    </div>
                </div>

                <div className='mt-3'>
                    <Link to='project2'><p className='text-center buttonDetails w-16'><button className=''>Details</button></p></Link>
                </div>
                {/* 
                <div>
                    <img className='px-2 mt-6' src="https://i.ibb.co/85v5tMZ/screencapture-crazy-bikers-b555f-web-app-2022-12-11-18-02-26.png" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default ProjectSingle2;