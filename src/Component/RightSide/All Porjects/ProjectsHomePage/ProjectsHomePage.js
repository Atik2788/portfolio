import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../../../Context';
import ProjectSingle from './ProjectSingle';
import ProjectSingle2 from './ProjectSingle2';
import ProjectSingle3 from './ProjectSingle3';

const ProjectsHomePage = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className='lg:p-4 mt-4 lg:mt-[-15px] mx-auto text-center'>
            <div id='Contact' className='contact-form p-3 rounded-lg'
                style={{
                    background: darkMode ? '#313b3e' : '#6c9da8db',
                    color: darkMode ? 'white' : 'black'
                }}
            >
                <div>
                    <p className='text-lg font-bold text-left'>Projects..</p>
                </div>

                <ProjectSingle></ProjectSingle>
                <ProjectSingle2></ProjectSingle2>
                <ProjectSingle3></ProjectSingle3>

            </div>
        </div>
    );
};

export default ProjectsHomePage;