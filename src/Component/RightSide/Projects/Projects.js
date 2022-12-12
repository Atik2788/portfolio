import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../../Context';
import Project1 from '../All Porjects/ProjectsSec/Project1';
import Project2 from '../All Porjects/ProjectsSec/Project2';
import Project3 from '../All Porjects/ProjectsSec/Project3';
import './Projects.css'

const Projects = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    return (
        <div
        style={{
            background: darkMode ? 'black' : '#f6f6f6',
            color: darkMode ? 'white' : 'black'
        }}
        >
            <h2 className='lg:text-xl pt-5 text-center font-bold'>Crazy Bikers (Web site for buy sell second hand bikes)</h2>
            <Project1></Project1>
            <h2 className='lg:text-xl pt-5 text-center font-bold'>Meet-Your-Trainer (A responsive project for a person who provides online physical training)</h2>
            <Project2></Project2>
            <h2 className='lg:text-xl pt-5 text-center font-bold'>E-Learn ( A responsive project for online learning platform)</h2>
            <Project3></Project3>
        </div>
    );
};

export default Projects;