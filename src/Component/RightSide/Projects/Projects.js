import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../../Context';
import './Projects.css'

const Projects = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    return (
        <div className='px-7 mx-auto text-center mt-[-45px] order-1 z-10'
            style={{
                color: darkMode ? 'white' : '#1d292c'
            }}
        >
            <div className='lg:w-80 projectsTitle  mx-auto'>
                <h3 className='lg:text-4xl text-2xl font-bold'>Recent Projects</h3>
            </div>

            <div className='lg:grid lg:grid-cols-3 gap-3 mt-12'>
                
                    <a target='_blank' href="https://crazy-bikers-b555f.web.app/">
                    <div className='mb-5'>
                        <img src="https://i.ibb.co/zGzqDrn/Untitled.png" alt="" />
                        <div className='mt-2'>
                            <p><span className='font-bold'>Crazy-Bikers</span> ( A responsive project for online reseller) Time period: 6 days</p>
                        </div>
                    </div>
                    </a>
                
                    <a  target='_blank' href="https://meet-your-trainer.web.app/">
                    <div className='mb-5'>
                        <img src="https://i.ibb.co/nPDYVNF/Untitled4.png" alt="" />
                        <div className='mt-2'>
                            <p><span className='font-bold'>Meet-Your-Trainer</span>( A responsive project for a person who provides online physical training) Time period: 4 days</p>
                        </div>
                    </div>
                    </a>
                
                    <a target='_blank' href="https://e-learn-5bc9e.web.app/">
                    <div className='mb-5'>
                        <img src="https://i.ibb.co/h8hWVpg/Untitled3.png" alt="" />
                        <div className='mt-2'>
                            <p><span className='font-bold'>E-Learn</span>( A responsive project for online learning platform) Time period: 3 days</p>
                        </div>
                    </div>
                    </a>



            </div>

        </div>
    );
};

export default Projects;