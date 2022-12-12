import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Skills from './Skills/Skills';

const LeftSide = () => {
    return (
        <div className=''>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <PersonalInfo></PersonalInfo>
            <Contact></Contact>
        </div>
    );
};

export default LeftSide;