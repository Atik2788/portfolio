import React from 'react';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Skills from './Skills/Skills';

const LeftSide = () => {
    return (
        <div className=''>
            <Header></Header>
            <Skills></Skills>
            <PersonalInfo></PersonalInfo>
            <Contact></Contact>
        </div>
    );
};

export default LeftSide;