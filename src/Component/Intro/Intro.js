import React from 'react';
import './Intro.css'
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png'
import facebook from '../../img/Facebook.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumb from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassimogi from '../../img/glassesimoji.png'
import FlotingDiv from '../FlotingDiv/FlotingDiv';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className="i-name">
                    <span>Hello! I Am</span>
                    <span>Atikur Rahman</span>
                    <span>Web Developer with skills in React JS, JavaScript, MongoDB, Node JS, HTML, CSS, Bootstrap, and Tailwind.</span>
                </div>
                <button className='button i-button'>Hire Me</button>

                <div className="i-icons">
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={facebook} alt="" />
                </div>

            </div>

            <div className='i-right'>
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassimogi} alt="" />

                <div style={{ top: '-4%', left: '68%' }}>
                    <FlotingDiv image={crown} text1={'Web'} text2={'Developer'}></FlotingDiv>
                </div>

                <div style={{ top: '64%', left: '0rem' }}>
                    <FlotingDiv image={thumb} text1={'Best Design'} text2={"Award"}></FlotingDiv>
                </div>

                <div className="blur" style={{ background: 'rgb(238 210 255)' }}>
                </div>

                <div className="blur"
                    style={{
                        background: '#C1F5FF',
                        top: '16rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-6rem'
                    }}
                ></div>

            </div>
        </div>
    );
};

export default Intro;