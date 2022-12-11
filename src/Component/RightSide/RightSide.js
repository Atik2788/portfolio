import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import ProjectsHomePage from './All Porjects/ProjectsHomePage/ProjectsHomePage';

const RightSide = () => {

    return (
        <div className='mt-3'>
            <ProjectsHomePage></ProjectsHomePage>
        </div>
    );
};

export default RightSide;