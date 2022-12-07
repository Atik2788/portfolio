import React from 'react';
import './Intro.css'

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className="i-name">
                    <span>Hello! I Am</span>
                    <span>Atik</span>
                    <span>Web Developer with skills in React JS, JavaScript, MongoDB, Node JS, HTML, CSS, Bootstrap, and Tailwind.</span>
                </div>
            </div>
            <button className='button i-button'>Hire Me</button>

            <div className='i-right'>
                I am the right side
            </div>
        </div>
    );
};

export default Intro;