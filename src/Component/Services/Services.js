import React from 'react';
import './Services.css'
import hertImogi from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './Resume.pdf'

const Services = () => {
    return (
        <div className='services'>
            {/* left side div */}
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor, sit Id iusto similique laborum maximporibus <br /> nisi magnam nesciunt reprehenderit.</span> <br />

                <a href={Resume} download> 
                    <button className='button s-button'>Download Resume</button>
                </a>

                <div className='blur s-blur' style={{ background: '#ABF1FF94', left: '33rem' }}></div>
            </div>

            {/* right side div */}
            <div className='cards'>

                {/* first card */}
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={hertImogi}
                        heading={"Design"}
                        details={"Figma, Sketch, Photoshop"}
                    />
                </div>

                {/* second card */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={glasses}
                        heading={"Developer"}
                        details={"Html, CSS, JavaScript"}
                    />
                </div>

                {/* third card */}
                <div style={{ top: '19rem', left: '14rem' }}>
                    <Card
                        emoji={humble}
                        heading={"UI/UX"}
                        details={"lo sdkf skfs fweif kwefwef"}
                    />
                </div>

                {/* <div className='blur s-blur2' style={{background: 'var(--purple'}}></div> */}
            </div>
        </div>
    );
};

export default Services;